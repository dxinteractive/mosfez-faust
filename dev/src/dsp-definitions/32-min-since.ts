import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

min_since(trig, x) = return
with {
  loop(fb, x) = ba.if(trig, x, min(x, fb));
  return = x : loop ~ _;
};

process = min_since;
`;

const dspDefinition: DspDefinition = {
  id: "min-since",
  name: "Min since",
  description: "Min since",
  dsp,
  type: "offline",
  input: [
    [1, 0, 0, 0, 1, 0, 0, 0],
    [4, 3, 2, 3, 9, 3, 4, 5],
  ],
  output: ["process"],
  expect: {
    process: [
      [4, 3, 2, 2, 9, 3, 3, 3],
      [4, 3, 2, 2, 9, 3, 3, 3],
    ],
  },
  channels: 2,
  sampleRate: 44100,
};

export default dspDefinition;
