import { useEffect, useState, useRef } from "react";
import type { DspDefinition } from "./types";

import Faust from "mosfez-faust/faust";
import touchStart from "mosfez-faust/touch-start";
import { arrayToAudioBuffer, audioBufferToArray } from "mosfez-faust/convert";

const audioContext = new window.AudioContext();
touchStart(audioContext);

const faust = new Faust();

export async function faustOfflineRender(
  dspDefinition: DspDefinition
): Promise<number[][]> {
  const { numberOfInputs, numberOfOutputs, outputLength, sampleRate, dsp } =
    dspDefinition;

  const offlineContext = new OfflineAudioContext(
    Math.max(numberOfInputs, numberOfOutputs),
    outputLength,
    sampleRate
  );

  const faustNode = await faust.compileNode(offlineContext, dsp);

  if (numberOfInputs === 0) {
    faustNode.connect(offlineContext.destination);
    faustNode.start();
  } else {
    const audioBuffer = arrayToAudioBuffer(offlineContext, [[0, 1, 2]]);

    const source: AudioBufferSourceNode = offlineContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(faustNode);
    faustNode.connect(offlineContext.destination);
    faustNode.start();
    source.start();
  }

  const renderedBuffer = await offlineContext.startRendering();
  return audioBufferToArray(renderedBuffer);
}

export type Output = number[][] | undefined;

export function useFaustOfflineRenderer(dspDefinition: DspDefinition): Output {
  const [output, setOutput] = useState<Output>(undefined);
  const isStartedRef = useRef(false);

  useEffect(() => {
    if (isStartedRef.current) return;
    isStartedRef.current = true;
    faustOfflineRender(dspDefinition).then((output) => {
      setOutput(output);
    });
  }, [dspDefinition]);

  return output;
}
