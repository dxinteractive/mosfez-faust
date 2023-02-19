import { toAudioBuffer, toFloat32AudioArray } from "mosfez-faust/convert";
import type { DspDefinition, RenderResults } from "../types";

async function start(
  buffer: AudioBuffer,
  audioContext: AudioContext,
  time: number
) {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.addEventListener("ended", () => {
    source.disconnect(audioContext.destination);
  });
  source.start(time);
}

async function callback(
  liveAudioContext: AudioContext,
  renderResults: RenderResults
) {
  console.log("sampleRate", liveAudioContext.sampleRate);

  const data: number[][] = [[]];
  const max = Math.round(liveAudioContext.sampleRate * 0.651);
  console.log("buffer length", max);
  for (let i = 0; i < max; i++) {
    const t = i / max;
    const v = Math.sin(t * Math.PI * 2 * 440);
    data[0].push(v * 0.1 + 0.5);
  }

  renderResults([
    {
      name: "buffer",
      output: toFloat32AudioArray(data),
    },
  ]);

  const buffer = await toAudioBuffer(data, liveAudioContext);

  const startTime = liveAudioContext.currentTime + 0.1;

  start(buffer, liveAudioContext, startTime);
  const gap = max / liveAudioContext.sampleRate;
  console.log("gap", gap);
  setTimeout(() => {
    start(buffer, liveAudioContext, startTime + gap);
  }, gap * 500);
  setTimeout(() => {
    start(buffer, liveAudioContext, startTime + gap * 2);
  }, gap * 1000);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {};
}

const dspDefinition: DspDefinition = {
  id: "chain-buffer",
  name: "Chain buffer",
  description: "An experiment in chaining buffers after one another",
  type: "callback",
  callback,
};

export default dspDefinition;
