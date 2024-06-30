import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

filter_top_freq = 625.0;
highest_freq = 1250.0;
smallest_cycle = ma.SR / highest_freq;
filter_bands = 8;

safe_divide(num, denom) = num / max(denom, 1) - num * (denom == 0);

pitch(x) = found_pitch,0
with {
  crossed_up(x) = (x' < 0) & (x >= 0);

  crossed = crossed_up(x);
  counted = ba.countup(ma.SR, crossed');

  cycle_pulse = counted : ba.if(crossed, _, 0.0);
  cycle_held = counted : ba.sAndH(crossed);
  matched = ba.if(crossed, abs(cycle_held' - cycle_held) < 5.0, -1.0);

  count_matches(x) = ba.pulse_countup(x != 0, max(0.0, x));
  match_counted = matched : count_matches;

  found_pitch = (match_counted >= 4.0) * cycle_held;
};

env_threshold(on, off, x) = x > on, x < off : ba.on_and_off : >(0);
gate = an.amp_follower_ar(0.0, 0.004) : env_threshold(0.1, 0.02);

filter = fi.mth_octave_filterbank(3, 1, filter_top_freq, filter_bands);
per_band_pitch = par(i, filter_bands, pitch : _,!);

ggg(x) = gate(x) * x;
input = ggg;

process(x) = cycle_caught <: _,_
with {
  note_on = gate(x);

  catch(x) = x;

  filter_highs(x) = x * (x >= smallest_cycle);

  cycle = x : *(note_on) : filter : per_band_pitch :> *(note_on);
  cycle_caught = cycle : filter_highs : catch;

  hz = safe_divide(ma.SR, cycle_caught);
  hz_rounded = hz : ba.hz2midikey : +(0.5) : floor : -(0.5) : ba.midikey2hz;
  osc = os.osc(hz_rounded) * 0.1 * (cycle_caught > 0.0);
};

// process_625 = input : filter : per_band_pitch : ba.selector(0, filter_bands) <: _,_;
// process_312 = input : filter : per_band_pitch : ba.selector(1, filter_bands) <: _,_;
// process_156 = input : filter : per_band_pitch : ba.selector(2, filter_bands) <: _,_;
// process_78 = input : filter : per_band_pitch : ba.selector(3, filter_bands) <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "multiband-filter",
  name: "Multiband filter",
  description: "Multiband filter",
  dsp,
  type: "offline",
  inputFile: "/audio/cycfi-q-pitch-test/GLines3.wav",
  channels: 1,
  sampleRate: 48000,
  // output: ["input", "process_625", "process_312", "process_156", "process_78"],
  output: ["input", "process"],
  outputLength: 48000 * 5,
  inputOffset: 18000 + 13000 + 402920,
};

export default dspDefinition;
