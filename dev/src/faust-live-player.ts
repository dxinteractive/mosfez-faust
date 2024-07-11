import { useEffect, useRef, useState } from "react";
import { DspDefinition, isDspLive } from "./types";

import { compile, FaustNode } from "mosfez-faust/faust";
import type { UIItem } from "mosfez-faust/faust";
import { audioSource } from "mosfez-faust/audio-source";
import { fetchFile } from "./fetch";
import { toAudioBuffer } from "mosfez-faust/convert";

let total = 0;

export type UseFaustLivePlayerResult = {
  ui: UIItem[];
  params: string[];
  node: FaustNode;
  source?: MediaStreamAudioSourceNode | AudioBufferSourceNode;
  audioContext?: AudioContext;
};

export function useFaustLivePlayer(
  audioContext: AudioContext,
  dspDefinition: DspDefinition
): UseFaustLivePlayerResult | undefined {
  const audioNode = useRef<FaustNode>();
  const [result, setResult] = useState<UseFaustLivePlayerResult | undefined>();

  useEffect(() => {
    if (!isDspLive(dspDefinition) || total >= 1) return;
    total++;

    let source: MediaStreamAudioSourceNode | AudioBufferSourceNode | undefined;

    compile(audioContext, dspDefinition.dsp).then(async (node) => {
      const { inputFile, inputOffset = 0, loopLength = 0 } = dspDefinition;

      if (node.numberOfInputs > 0) {
        if (inputFile) {
          const response = await fetchFile(inputFile);
          if (!response.ok) {
            throw new Error(`Could not load sound file "${inputFile}"`);
          }
          const arrayBuffer = await response.arrayBuffer();

          source = audioContext.createBufferSource();

          source.buffer = await toAudioBuffer(arrayBuffer, audioContext);
          source.connect(node);
          node.connect(audioContext.destination);
          if (inputOffset) {
            source.loopStart = inputOffset;
            source.loop = true;
          }
          if (loopLength) {
            source.loopEnd = loopLength;
            source.loop = true;
          }
          source.start(0, inputOffset);
        } else {
          source = await audioSource(audioContext);
          source.connect(node);
        }
      }

      node.connect(audioContext.destination);
      audioNode.current = node;

      audioContext.destination.channelCount =
        audioContext.destination.maxChannelCount;
      audioContext.destination.channelCountMode = "explicit";

      setResult({
        ui: node.ui,
        params: node.getParams(),
        node,
        source,
        audioContext,
      });
    });

    return () => {
      total--;
      if (audioNode.current) {
        audioNode.current.disconnect();
        audioNode.current.destroy();
      }

      if (source && source instanceof AudioBufferSourceNode) {
        source.stop();
      }
    };
  }, [dspDefinition]);

  return result;
}
