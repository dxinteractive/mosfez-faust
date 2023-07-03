import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

loop_delay_time = hslider("delay time", 500.0, 0.0, 1000.0, 0.1) * 0.001 * ma.SR;
loop_delay = de.delay(ma.SR, loop_delay_time);
fb_loop = loop_delay;

right_channel_delay_time = hslider("right channel delay time", 250.0, 0.0, 1000.0, 0.1) * 0.001 * ma.SR;
right_channel_delay = de.delay(ma.SR, right_channel_delay_time);

dry_volume = hslider("dry", 1.0, 0.0, 1.0, 0.01);
dry(x) = x * dry_volume;

wet_volume = hslider("wet", 0.5, 0.0, 1.0, 0.01);
wet(x) = x * wet_volume;

feedback = hslider("feedback", 0.5, 0.0, 1.0, 0.01);

dsp(l, r) = (l + r * feedback), (r : right_channel_delay);

loop(dsp, fb, l) = (l, fb : dsp), fb;
lr(l, r) = r, l;
alchemist(dsp, x) = x : loop(dsp) ~ fb_loop : !,_,_ : lr;

echoloop(dsp, l, r) = out
with {
  w = l : alchemist(dsp) : wet,wet;
  d = l,r : dry,dry;
  out = w,d :> _,_;
};

input = _ <: _,_;
process = input : echoloop(dsp) : _,_;
`;

const dspDefinition: DspDefinition = {
  id: "echoloop-live",
  name: "Echo loop pedal sim live",
  description:
    "Echoloop echo pedal DSP, and also its analog connections as DSP for localdev",
  dsp,
  type: "live",
};

export default dspDefinition;
