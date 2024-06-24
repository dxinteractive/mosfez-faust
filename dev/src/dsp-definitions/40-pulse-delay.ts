import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

delay_max = ma.SR * 5;

wet_param = 1.0;
dry_param = 0.7;
fb_param = 0.9;
time_param = 0.2 * ma.SR;

squash(x) = 1.0 - (1.0 / (x + 1.0));
stretch(mn, mx, x) = (x - mn) / (mx - mn) : min(1.0) : max(0.0);
env = *(10.0) : an.amp_follower_ar(0.1, 0.1) : squash : stretch(0.2, 0.7);
swell(x) = x * env(x);

mod_speed_param = 3.0;
mod_depth_param = 0.0002;
mod = 1.0 - ((os.osc(mod_speed_param) * 0.5 + 0.5) * mod_depth_param);

delay(time, fb, x) = x + fb : de.fdelay(delay_max, time * mod) : fi.highpass(2, 200.0) : fi.lowpass(2, 5000.0);
fb = *(fb_param);
echo(time) = delay(time) ~ fb;

wet = swell <: echo(time_param) :> _;
dry(x) = x * dry_param * (1.0 - env(x) * 0.9);

process = _ <: (dry,wet) :> _;

`;

const dspDefinition: DspDefinition = {
  id: "pulse-delay",
  name: "Pulse delay",
  description: "Smooth off transients before high feedback clean delay",
  dsp,
  type: "offline",
  inputFile: "/audio/cycfi-q-pitch-test/GLines3.wav",
  channels: 1,
  sampleRate: 48000,
  outputLength: 48000 * 20,
  inputOffset: 18000 + 13000,
};

export default dspDefinition;
