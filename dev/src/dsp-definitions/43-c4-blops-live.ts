import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
import("stdfaust.lib");

// consts
peak = 0.65;
threshold = peak * 0.05;
highest_hz = 1320.0;
shortest_cycle = ma.SR / highest_hz;
key_latch_start = ma.SR * 0.001 * 30;
key_latch_end = ma.SR * 0.001 * 60;

// utils
zero_crosses(x) = (x' > 0) != (x > 0);
crossed_up(x) = (x' < 0) & (x >= 0);
safe_divide(num, denom) = num / max(denom, 1) - num * (denom == 0);
is_first_tick = ba.time == 0;
is_note_on = _ : an.amp_follower_ar(0.00001, 0.01) > threshold;

fx(x) = osc
with {
  note_on = is_note_on(x);
  note_on_time = ba.countup(10000, 1 - note_on);

  crosses = x : *(note_on) : crossed_up;
  crosses_on = crosses + (1 - note_on);
  cycle = ba.countup(10000, crosses_on') : ba.sAndH(crosses_on);
  key = ba.if(cycle < shortest_cycle, 0.0, (ma.SR / cycle) : ba.hz2midikey : +(0.5) : floor);

  key_latch = (note_on_time >= key_latch_start) & (note_on_time < key_latch_end);
  key_latched = key : ba.sAndH(key_latch);

  noise_trigger = note_on : ba.impulsify;
  noise_env = en.adsr(0.0, 0.0, 1.0, 0.01, noise_trigger);
  noise_osc = no.pink_noise : *(noise_env) : *(5.0);

  tone_trigger = noise_trigger : @(key_latch_start);
  tone_env = en.adsr(0.0, 0.0, 1.0, 0.2, tone_trigger);
  tone_osc = key_latched : ba.midikey2hz : os.square : *(tone_env);

  osc = noise_osc + tone_osc;
};

process = _,! : fx <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "c4-blops-live",
  name: "C4 blops live",
  description: "Plays blops from the C4 for processing",
  inputFile: "/audio/recorded/c4-blops.wav",
  loopLength: 2.46,
  dsp,
  type: "live",
};

export default dspDefinition;
