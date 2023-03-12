import { toAudioBuffer, toFloat32AudioArray } from "mosfez-faust/convert";
import type { DspDefinition, RenderResults } from "../types";

function wave(t: number): number {
  return Math.sin(t * Math.PI * 2);
  // return (t % 1) * 2 - 1;
}

async function callback(
  liveAudioContext: AudioContext,
  renderResults: RenderResults
) {
  const data: number[][] = [[]];
  const cycleLengthArray: number[] = [];

  for (let i = 0; i < 400; i++) {
    // const pitch = Math.sin((i / 100) * Math.PI * 2) * 20 + 440;
    const pitch = Math.random() * 40 + 420; // random
    const cycleLengthInSamples = Math.round(
      liveAudioContext.sampleRate / pitch
    );
    const cycleLengthInSeconds =
      cycleLengthInSamples / liveAudioContext.sampleRate;
    for (let j = 0; j < cycleLengthInSamples; j++) {
      const v = wave(j / cycleLengthInSamples);
      data[0].push(v * 0.3);
    }
    cycleLengthArray.push(cycleLengthInSeconds);
  }

  const offlineContext = new OfflineAudioContext(
    1,
    liveAudioContext.sampleRate * 1.5,
    liveAudioContext.sampleRate
  );

  const source = new AudioBufferSourceNode(offlineContext);
  source.buffer = await toAudioBuffer(data, liveAudioContext);
  source.connect(offlineContext.destination);

  let t = 0;
  cycleLengthArray.forEach((cycleLength) => {
    const rate = cycleLength * 440;
    source.playbackRate.setValueAtTime(rate, t);
    t += cycleLength;
  });
  source.start();

  const renderedBuffer = await offlineContext.startRendering();
  const renderedOutput = toFloat32AudioArray(renderedBuffer);

  const referenceData: number[][] = [[]];
  for (let i = 0; i < liveAudioContext.sampleRate; i++) {
    const t = i / liveAudioContext.sampleRate;
    const v = wave(t * 440);
    referenceData[0].push(v * 0.3);
  }

  const flattened = toFloat32AudioArray(renderedOutput);
  const reference = toFloat32AudioArray(referenceData);

  const diffData: number[][] = [[]];
  for (let i = 0; i < liveAudioContext.sampleRate; i++) {
    const v = flattened[0][i] - reference[0][i];
    diffData[0].push(v);
  }

  renderResults([
    {
      name: "input",
      output: toFloat32AudioArray(data),
    },
    {
      name: "flattened",
      output: flattened,
    },
    {
      name: "reference",
      output: reference,
    },
    {
      name: "diff",
      output: toFloat32AudioArray(diffData),
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {};
}

const dspDefinition: DspDefinition = {
  id: "pitch-flattening",
  name: "Pitch flattening",
  description:
    "Flattening out the pitch of a sound by adjusting playback rate at each cycle",
  type: "callback",
  callback,
};

export default dspDefinition;
