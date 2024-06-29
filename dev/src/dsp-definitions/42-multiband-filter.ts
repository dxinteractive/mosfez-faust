import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");


filter_top_freq = 1250.0;
filter_bands = 8;

active_channel = 6;

sign(x) = ba.if(x > 0, 1, 0);
detect_crossing(x) = sign(x) != sign(x');
pitch(x) = hz,osc
with {
  lowest_pitch = 0.25;
  longest_cycle = ma.SR / lowest_pitch;
  crossed_up(x) = (x' < 0) & (x >= 0);
  safe_divide(num, denom) = num / max(denom, 1) - num * (denom == 0);
  reject_sub_pitches(x) = ba.if(x > longest_cycle, 0, x); 

  crossed = crossed_up(x);
  cycle = ba.countup(ma.SR, crossed')
    : ba.sAndH(crossed)
    : reject_sub_pitches;
  
  hz = safe_divide(ma.SR, cycle);
  osc = os.osc(hz) * 0.2;
};

per_band = pitch : _,!;
// TODO track amplitude
// reject any too quiet, or where hz is too variable

filter = fi.mth_octave_filterbank(active_channel, 1, filter_top_freq, filter_bands);
zero = par(i, filter_bands, per_band);

input = _;
process_1250 = _ : filter : zero : ba.selector(0, filter_bands) <: _,_;
process_625 = _ : filter : zero : ba.selector(1, filter_bands) <: _,_;
process_312 = _ : filter : zero : ba.selector(2, filter_bands) <: _,_;
process_156 = _ : filter : zero : ba.selector(3, filter_bands) <: _,_;
process_78 = _ : filter : zero : ba.selector(4, filter_bands) <: _,_;
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
  output: [
    "input",
    "process_1250",
    "process_625",
    "process_312",
    "process_156",
    "process_78",
  ],
  outputLength: 48000,
  inputOffset: 18000 + 13000,
};

export default dspDefinition;
