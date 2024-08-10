import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// consts
peak = 0.65;
threshold = peak * 0.02;

// utils
zero_crosses(x) = (x' > 0) != (x > 0);
crossed_up(x) = (x' < 0) & (x >= 0);

// process
input = _;

is_note_on = _ : an.amp_follower_ar(0.00001, 0.01) > threshold;

devfn(x) = crosses,cycle
with {
  note_on = is_note_on(x);
  crosses = x : *(note_on) : crossed_up;
  crosses_on = crosses + (1 - note_on);
  cycle = ba.countup(10000, crosses_on') : ba.sAndH(crosses_on);
};

dev_crosses_on = _ : devfn : _,!;
dev_cycle = _ : devfn : !,_;
process = _ <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "c4-blops",
  name: "C4 blops",
  description: "Plays blops from the C4 for processing",
  inputFile: "/audio/recorded/c4-blops.wav",
  dsp,
  type: "offline",
  channels: 1,
  sampleRate: 48000,
  output: ["input", "dev_crosses_on", "dev_cycle"],
  outputLength: 48000 * 2.46,
  inputOffset: 1000,
};

export default dspDefinition;
