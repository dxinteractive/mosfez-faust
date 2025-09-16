import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// synth

tune1 = waveform{59,-1,57,-1,59,-1,62,-1,57,-1,59,62,59,-1,57,-1};
tune2 = waveform{47,-1,-1,42,-1,-1,45,-1,50,-1,-1,42,-1,-1,45,-1};
tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(16,0.2)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0) : en.adsre(0.01,3.,0.0,2.0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};
synth(gate) = ba.midikey2hz : os.triangle : *(gate) : *(0.2);
gtr_synth = tunePlayer(tune1) : synth;
bass_synth = tunePlayer(tune2) : synth;

// alchemist.dsp
//
//   B
// A   C
//   D

// utils

counter(trig) = upfront(trig) : + ~ _ with { upfront(x) = x > x'; };

lerp(a, b, x) = a + (b - a) * x;

constantPowerPan(p, x) = x*gainLeft, x*gainRight
with {
    theta = ma.PI*p/2.;
    gainLeft = cos(theta)/sqrt(2.);
    gainRight = sin(theta)/sqrt(2.);
};

reject_noise(slack, move_time, x) = return with {
  loop(prev_out, prev_timer, x) = loop_return with {
    trig = abs(prev_out - x) > slack;
    timer = ba.if(trig, 0, prev_timer + 1);
    out = ba.if(trig | timer < ma.SR * move_time, x, prev_out);
    loop_return = out,timer;
  };
  return = x : loop ~ (_,_) : (_,!);
};

isFirstTick = ba.time == 0;
sAndHWithDefault(default, trig, x) = ba.sAndH(isFirstTick | trig, select2(isFirstTick, x, default));

changed(x) = x != x';

layerIsAwake(l,x,t) = return with {
  layerChange = l : changed;
  startPos = x : ba.sAndH(layerChange);
  nudged = abs(x - startPos) > t;
  return = layerChange,nudged : ba.on_and_off : _ == 0;
};

layerValue(l,i,t,x) = return with {
  return = x : sAndHWithDefault(0.5, (l == i) & layerIsAwake(l,x,t));
};

sine(rate) = os.osc(rate) + 1. * .5;

// consts

chorus_voice_count = 5;
// ...

// input

// lag_param = hslider("lag[OWL:A]", 0.5, 0.0, 1.0, 0.001) : reject_noise(0.05, 1.0) : si.smoo;
// shape_param = hslider("shape[OWL:B]", 0, 0, shape_count, 1) : int;
// trem_param = hslider("trem[OWL:D]", 0.5, 0.0, 1.0, 0.001) : reject_noise(0.05, 1.0) : si.smoo;
// depth_param = hslider("depth[OWL:C]", 0.5, 0.0, 1.0, 0.001) : reject_noise(0.05, 1.0) : si.smoo;
// width_button = button("width[OWL:B1]");
// alt_button = button("alt[OWL:B2]");

// effects

// chorus_offset(i) = sine(5.0 + i) + sine(2.3 + i * .5) + sine(5.7 + i * .2) : /(3.);

chorus_offset(i) = sine(5.0 + i);
chorus_voice(i) = de.fdelay(3000, chorus_offset(i * .1) * 10.) <: _,_;
chorus(x) = x <: par(i, chorus_voice_count, chorus_voice(i)) :> /(chorus_voice_count),/(chorus_voice_count);

// routing

gtr = _ : chorus : _,_;
bass =  _ <: _,_;

amp = *(3.0);
process = gtr_synth,bass_synth : gtr,bass :> amp,amp;
`;

const dspDefinition: DspDefinition = {
  id: "alchemist-prototype-3",
  name: "alchemist prototype 3",
  description: "Makes a live tune and puts through alchemist",
  dsp,
  type: "live",
};

export default dspDefinition;
