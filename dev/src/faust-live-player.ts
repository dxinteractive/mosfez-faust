import { useEffect, useRef, useState } from "react";
import type { DspDefinition } from "./types";

import { compile, FaustNode } from "mosfez-faust/faust";
import type { UIItem } from "mosfez-faust/faust";
import { audioSource } from "mosfez-faust/audio-source";

export type UseFaustLivePlayerResult = {
  ui: UIItem[];
  params: string[];
  node: FaustNode;
  source?: MediaStreamAudioSourceNode;
  audioContext?: AudioContext;
};

export function useFaustLivePlayer(
  audioContext: AudioContext,
  dspDefinition: DspDefinition
): UseFaustLivePlayerResult | undefined {
  const effectCountRef = useRef(0);
  const audioNode = useRef<FaustNode>();
  const [result, setResult] = useState<UseFaustLivePlayerResult | undefined>();

  useEffect(() => {
    if (dspDefinition.type !== "live") return;
    const count = ++effectCountRef.current;

    compile(audioContext, dspDefinition.dsp).then(async (node) => {
      if (effectCountRef.current !== count) return;

      let source: MediaStreamAudioSourceNode | undefined;

      if (node.numberOfInputs > 0) {
        source = await audioSource(audioContext);
        source.connect(node);
      }

      node.connect(audioContext.destination);
      audioNode.current = node;

      setResult({
        ui: node.ui,
        params: node.getParams(),
        node,
        source,
        audioContext,
      });
    });

    return () => {
      if (audioNode.current) {
        audioNode.current.disconnect();
        audioNode.current.destroy();
      }
    };
  }, [dspDefinition]);

  return result;
}
