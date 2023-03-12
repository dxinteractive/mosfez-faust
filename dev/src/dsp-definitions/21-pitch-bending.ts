import { toAudioBuffer, toFloat32AudioArray } from "mosfez-faust/convert";
import type { DspDefinition, RenderResults } from "../types";

async function renderBender(
  liveAudioContext: AudioContext,
  original: number[][],
  cycleLengthArray: number[],
  cb: (absn: AudioBufferSourceNode, cycleLength: number, t: number) => void
) {
  const offlineContext = new OfflineAudioContext(
    1,
    liveAudioContext.sampleRate * 1.5,
    liveAudioContext.sampleRate
  );

  const source = new AudioBufferSourceNode(offlineContext);
  source.buffer = await toAudioBuffer(original, liveAudioContext);
  source.connect(offlineContext.destination);

  let t = 0;
  cycleLengthArray.forEach((cycleLength) => {
    cb(source, cycleLength, t);
    t += cycleLength;
  });
  source.start();

  return await offlineContext.startRendering();
}

function wave(t: number): number {
  // return Math.sin(t * Math.PI * 2);
  return (t % 1) * 2 - 1;
  // return t % 1 < 0.5 ? 1 : -1;
}

async function callback(
  liveAudioContext: AudioContext,
  renderResults: RenderResults
) {
  const original: number[][] = [[]];
  for (let i = 0; i < liveAudioContext.sampleRate; i++) {
    const t = i / liveAudioContext.sampleRate;
    const v = wave(t * 440);
    original[0].push(v * 0.3);
  }

  const cycleLengthArray: number[] = [];

  for (let i = 0; i < 400; i++) {
    const pitch = Math.sin((i / 100) * Math.PI * 2) * 20 + 440;
    // const pitch = Math.random() * 40 + 420; // random
    cycleLengthArray.push(1 / pitch);
  }

  const renderedBuffer = await renderBender(
    liveAudioContext,
    original,
    cycleLengthArray,
    (source, cycleLength, t) => {
      const rate = cycleLength * 440;
      source.playbackRate.setValueAtTime(rate, t);
    }
  );

  const renderedBuffer2 = await renderBender(
    liveAudioContext,
    original,
    cycleLengthArray,
    (source, cycleLength, t) => {
      const rate = cycleLength * 440;
      source.playbackRate.linearRampToValueAtTime(rate, t);
    }
  );

  renderResults([
    {
      name: "original",
      output: toFloat32AudioArray(original),
    },
    {
      name: "bent",
      output: toFloat32AudioArray(renderedBuffer),
    },
    {
      name: "bent2",
      output: toFloat32AudioArray(renderedBuffer2),
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {};
}

const dspDefinition: DspDefinition = {
  id: "pitch-bending",
  name: "Pitch bending",
  description: "Adding small pitch fluctiations into a stable pitch signal",
  type: "callback",
  callback,
};

export default dspDefinition;
