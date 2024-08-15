import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// consts
peak = 0.65;
threshold = peak * 0.02;
highest_hz = 1320.0;
shortest_cycle = ma.SR / highest_hz;

// utils
zero_crosses(x) = (x' > 0) != (x > 0);
crossed_up(x) = (x' < 0) & (x >= 0);
safe_divide(num, denom) = num / max(denom, 1) - num * (denom == 0);

// process
input = _;

is_note_on = _ : an.amp_follower_ar(0.00001, 0.01) > threshold;

devfn(x) = crosses,cycle,key,sine
with {
  note_on = is_note_on(x);
  crosses = x : *(note_on) : crossed_up;
  crosses_on = crosses + (1 - note_on);
  cycle = ba.countup(10000, crosses_on') : ba.sAndH(crosses_on);
  key = ba.if(cycle < shortest_cycle, 0.0, (ma.SR / cycle) : ba.hz2midikey : +(0.5) : floor);
  sine = key : ba.midikey2hz : os.osc;
};

dev_crosses_on = _ : devfn : _,!,!,!;
dev_cycle = _ : devfn : !,_,!,!;
dev_key = _ : devfn : !,!,_,!;
dev_sine = _ : devfn : !,!,!,_;
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
  output: ["input", "dev_crosses_on", "dev_cycle", "dev_key", "dev_sine"],
  outputLength: 48000 * 2.46,
  inputOffset: 1000,
};

export default dspDefinition;
