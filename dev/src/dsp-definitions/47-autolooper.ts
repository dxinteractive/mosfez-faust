import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// synth

gate_button = button("gate");

tune1 = waveform{48,47,45,40,45,47,43,47};
tunePlayer(tune) = tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,0.4)) : rdtable : -(12);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};
synth = ba.midikey2hz : os.triangle : *(gate_button : en.adsre(0.001,9.0,0.0,0.01)) : *(0.2 + os.osc(.2) * .05 + os.osc(.52) * .03);
bass_synth = tunePlayer(tune1) : synth;

// utils

falling_edge(x) = x > 0 & x' == 0;

// consts

buffer_size = 200000;

// auto looper

env_threshold = hslider("threshold",0.05,0.0,1.0,0.001);
wait_time = hslider("wait",0.2,0.0,1.0,0.001) * ma.SR;
loop_time = hslider("loop",2.0,0.0,2.0,0.001) * ma.SR;
head_time = hslider("head",0.3,0.0,1.0,0.001) * ma.SR;
tail_time = loop_time - head_time;

write_sample = ba.sweep(buffer_size, 1)
  <: attach(_, hbargraph("write_sample", 0, buffer_size));

trigger_zone = an.amp_follower(0.1)
  : <(env_threshold)
  : ba.countup(wait_time)
  : ==(wait_time);
  // <: attach(_, hbargraph("trigger_zone", 0, 1));

trigger_impulse = trigger_zone
  : ba.impulsify;

trigger_sample(x) = write_sample
  : ba.sAndH(x : trigger_impulse)
  <: attach(_, hbargraph("trigger_sample", 0, buffer_size));

read_sample(x) = x
  : trigger_sample
  : +(ba.sweep(loop_time, x : trigger_impulse : ==(0)))
  : %(buffer_size)
  <: attach(_, hbargraph("read_sample", 0, buffer_size));

trigger_since = trigger_impulse
  : ba.countup(99999999);
  // <: attach(_, hbargraph("trigger_since", 0, buffer_size));

tail_zone = trigger_since
  : <(tail_time)
  <: attach(_, hbargraph("tail_zone", 0, 1));

read_volume = tail_zone
  : ==(0);

buffer_switch = tail_zone
  : falling_edge
  : ba.toggle
  <: attach(_, hbargraph("buffer_switch", 0, 1));

read_index(x) = read_sample(x) + (buffer_switch(x) * buffer_size)
  <: attach(_, hbargraph("read_index", 0, buffer_size * 2));

// write_index(x) = write_sample(x) + (buffer_switch(x) * buffer_size)
//   <: attach(_, hbargraph("write_index", 0, buffer_size * 2));

// table(x) = rwtable(buffer_size * 2, 0., int(rec_head), _, int(p));

fx = _ <: attach(_, read_index) <: attach(_, write_sample);

with_dry(wet, x) = x <: _,wet :> _;

// process

process = bass_synth : with_dry(fx) <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "auto-looper",
  name: "Auto-looper",
  description:
    "Captures a loop of audio after an env threshold has been reached for some amount of time",
  dsp,
  type: "live",
};

export default dspDefinition;
