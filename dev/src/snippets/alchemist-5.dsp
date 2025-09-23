//
// alchemist.dsp - bass compressor only
//

import("stdfaust.lib");

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

// consts

// input
//
//   B
// A   C
//   D

detune_param = hslider("detune[OWL:A]", 0., 0., .2, .001) : si.smoo;
wet_param = hslider("wet[OWL:B]", 0., 0., 1., .01) : si.smoo;

// foo_button = button("foo[OWL:B1]");
// bar_button = button("bar[OWL:B2]");

// fx

fx = ef.transpose(ma.SR * .003, ma.SR * .003 * .9, -detune_param);
fx2 = ef.transpose(ma.SR * .0041, ma.SR * .0041 * .9, -detune_param * .5);
gtr = *(wet_param) <: fx,fx2 : _,_;

bass_gate = ef.gate_mono(-64., .005, 0., 1.);
bass_comp = co.compressor_mono(32., -34., 0., .4);
bass_makeup =  *(5.);
bass = bass_gate : bass_comp : bass_makeup <: _,_;

amp = *(3.);
process = gtr,bass :> amp,amp;