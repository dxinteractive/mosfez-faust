import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

shortPress(time, trig) = return with {
  up_while_press = ba.countup(time, trig == 0);
  on_release = trig < trig';
  held_enough = up_while_press < time;
  return = held_enough' & on_release;
};

input = _;
process = input : shortPress(3);
`;

const dspDefinition: DspDefinition = {
  id: "short-press",
  name: "Short press",
  description:
    "Fires an implulse on button release if button was held shorter than t time",
  dsp,
  type: "offline",
  sampleRate: 44100,
  channels: 1,
  input: [
    [
      0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1,
      1, 1, 0, 0, 0,
    ],
  ],
  output: ["input", "process"],
  // outputLength: 18,
  // expect: {
  //   scan: [[4, 4, 0, 9, 4, 3, 0, 1, 0, 1, 4, 5, 10, 11, 10, 0, 0, 0]],
  //   process: [[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1]],
  // },
};

export default dspDefinition;
