import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

threshold_on = 0.2;
threshold_off = 0.02;
release = 0.004;
table_size = 100000;
sampling_time = 10300;
sampling_time_2 = sampling_time * 2;

on_up(x) = x > x';
invert_boolean(x) = x == 0;
env_threshold(on, off, x) = x > on, x < off : ba.on_and_off : >(0);
counter(trig) = on_up(trig) : + ~ _;

input = _;
env = input : an.amp_follower_ar(0.0, release);
env_active = env : env_threshold(threshold_on, threshold_off);
env_on = env_active : ba.impulsify;
gated = input * env_active;

env_active_timer = env_active : invert_boolean : ba.countup(table_size);
env_active_sweep = env_active_timer : ba.sweep(table_size);

record_head = env_active_sweep * (env_active_sweep <= sampling_time * 2);
playback_head = ((env_active_sweep - 1) % sampling_time) + 1;
playback_head2 = max(0, (((env_active_sweep - (sampling_time / 2)) - 1) % sampling_time) + 1);

vol(v) = cos(v * ma.PI * 2.0) * -0.5 + 0.5;

table(pb, x) = rwtable(table_size, 0.0, record_head(x), x, pb(x)) * vol(pb(x) / sampling_time);
fx(x) = table(playback_head, x) + table(playback_head2, x) + (x * max(0.0, 1.0 - (env_active_sweep / sampling_time) * 2.0));
process = fx;
`;

const dspDefinition: DspDefinition = {
  id: "autosampler",
  name: "Autosampler",
  description: "Grabbing a chunk of audio based on an env",
  dsp,
  type: "offline",
  inputFile: "/audio/cycfi-q-pitch-test/GLines3.wav",
  channels: 1,
  sampleRate: 48000,
  output: ["env_active", "process"],
  outputLength: 48000 * 20,
  inputOffset: 18000 + 13000 + 300000,
};

export default dspDefinition;
