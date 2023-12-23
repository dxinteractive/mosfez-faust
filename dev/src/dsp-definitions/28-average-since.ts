import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

average_since(trig, x) = return
with {
  count = ba.countup(9999, trig);
  loop(fb, x) = (fb * (trig == 0)) + x;
  return = x : loop ~ _ : /(count + 1);
};

process = average_since;
`;

const dspDefinition: DspDefinition = {
  id: "average-since",
  name: "Average since",
  description: "Average since",
  dsp,
  type: "offline",
  input: [
    [1, 0, 0, 0, 1, 0, 0, 0],
    [4, 3, 2, 1, 2, 3, 4, 5],
  ],
  output: ["process"],
  expect: {
    process: [[4, 3.5, 3, 2.5, 2, 2.5, 3, 3.5]],
  },
  channels: 2,
  sampleRate: 44100,
};

export default dspDefinition;
