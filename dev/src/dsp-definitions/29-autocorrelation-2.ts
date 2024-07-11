import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// settings

longest_detectable_period = ma.SR / 80.0;
shortest_detectable_period = ma.SR / 1318.0;

sample_points = 64 * 2;
sample_stride = 4;

// utils

changed(x) = x != x';
only_changed(x) = ba.if(changed(x), x, -1);
count_stride(total, stride, trig) = ba.countup((total - 1) * stride, trig) / stride : int;

min_since(trig, x) = return
with {
  loop(fb, x) = ba.if(trig, x, min(x, fb));
  return = x : loop ~ _;
};

mean_since(trig, x) = return
with {
  count = ba.countup(9999, trig);
  loop(fb, x) = (fb * (trig == 0)) + x;
  return = x : loop ~ _ : /(count + 1);
};

// process

input = _;
envelope = an.amp_follower_ar(0.0,0.1);
start_capture = envelope : >(0.1) : ba.impulsify : @(longest_detectable_period);

samples_since_start_capture = ba.countup(99999, start_capture);
samples_since_capture_end = samples_since_start_capture - (sample_points - 1) * sample_stride;
start_detect_pitch = samples_since_capture_end >= shortest_detectable_period : ba.impulsify;
trigger_sample_capture = start_capture : count_stride(sample_points, sample_stride) : only_changed;

each(i,curr_v) = result
with {
  samples_ago = (sample_points - i - 1) * sample_stride;
  offset_v = curr_v : @(samples_ago);
  captured_v = ba.sAndH(trigger_sample_capture(offset_v) == i);
  diff_v = curr_v - captured_v;
  result = diff_v * diff_v;
};

autocorrelated_difference = _ <: par(i, sample_points, each(i)) :> _;

culumative_mean_difference(v) = result
with {
  acd = v : autocorrelated_difference;
  mean_since_start_capture = acd : mean_since(v : start_detect_pitch);
  result = acd : /(mean_since_start_capture) : min(20.0);
};

cmd = culumative_mean_difference;

best_match_foo(v) = result
with {
  min_since_start_capture = v : culumative_mean_difference : min_since(v : start_detect_pitch);
  min_changed = min_since_start_capture : changed;
  period = v : samples_since_capture_end : ba.sAndH(min_changed);
  result = (ma.SR / (period + 0.001)) : max(20.0) : min(20000.0);
};

best_match = best_match_foo;
osc = best_match : os.osc * 0.4;
`;

const dspDefinition: DspDefinition = {
  id: "autocorrelation-2",
  name: "Auto-correlation 2",
  description: "Auto-correlates pitch 2",
  dsp,
  type: "offline",
  output: [
    "input",
    "trigger_sample_capture",
    "samples_since_capture_end",
    "autocorrelated_difference",
    "cmd",
    "best_match",
    "osc",
  ],
  inputFile: "/audio/cycfi-q-pitch-test/GStaccato.wav",
  inputOffset: 25400,
  outputLength: 192000, // 27921, // 192000,

  // inputFile: "/audio/cycfi-q-pitch-test/2c-A-24th.wav",
  // inputOffset: 7624,
  // outputLength: 20000, // 27921, // 192000,

  // inputFile: "/audio/cycfi-q-pitch-test/1a-Low-E.wav",
  // inputOffset: 47500,
  // outputLength: 55000, // 27921, // 192000,
  sampleRate: 48000,
  channels: 1,
};

export default dspDefinition;
