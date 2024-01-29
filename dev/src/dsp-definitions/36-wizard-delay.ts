import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

delay_max = ma.SR * 5;

wet_param = 0.5;
dry_param = 1.0;
fb_param = 0.5;
time_param = 0.5;

mod_speed_param = 3.0;
mod_depth_param = 0.0001;
mod = 1.0 - ((os.osc(mod_speed_param) * 0.5 + 0.5) * mod_depth_param);

// modx = mod * (os.lf_sawpos(time_param * 2) + 0.01);

delay(time, fb, x) = x + fb : de.fdelay(delay_max, time * mod) : fi.highpass(2, 200.0) : fi.lowpass(2, 4000.0);
fb = *(fb_param);
echo(time) = delay(time) ~ fb;

wet_l = echo(time_param * ma.SR * 0.8);
wet_r = echo(time_param * ma.SR);
wet = _ <: wet_l,wet_r : *(wet_param),*(wet_param);
dry = *(dry_param);

process = _ <: (dry <: _,_),wet :> _,_;
`;

const dspDefinition: DspDefinition = {
  id: "wizard",
  name: "Wizard delay",
  description: "Rebeltech wizard-based delay pedal DSP",
  dsp,
  type: "live",
  inputFile: "/audio/freesound/584282__yellowtree__clean-guitar-loop.wav",
  inputOffset: 0,
  loopLength: 16 + 8,
};

export default dspDefinition;
