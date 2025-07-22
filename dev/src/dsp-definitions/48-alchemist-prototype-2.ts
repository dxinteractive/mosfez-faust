import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// mosfez-alchemist.dsp
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


// synth

scale = waveform{0.,3.,5.,7.,10.};
gate = checkbox("play");
play = ba.time % (ma.SR) : _ < ma.SR * .4 : *(gate);
pitch = no.noise * .5 + .5 : *(5): int : rdtable(scale) : +(50) : ba.sAndH(play : changed);
gtr_synth = pitch : ba.midikey2hz : os.triangle : *(play) : *(0.2);
bass_synth = 0;

// consts

max_delay = ma.SR * 2.;

overdub_param = hslider("overdub[OWL:E]", 0.0, 0.0, 1.0, 0.001) : reject_noise(0.05, 1.0) : si.smoo;

// input

// delay

looper(x) = return with {
  overdub = overdub_param;

  mix(fb, x) = mixed with {
    mixed = lerp(fb, x, overdub);
  };

  fb = de.delay(max_delay, max_delay);
  dry = *(1. - overdub);
  wet = mix ~ fb;
  return = x <: dry,wet :> _ <: _,_;
};

// routing

fx = looper;

amp = *(3.0);
process = gtr_synth,bass_synth :> fx : amp,amp;
`;

const dspDefinition: DspDefinition = {
  id: "alchemist-prototype-2",
  name: "alchemist prototype 2",
  description: "Makes a live tune and puts through alchemist prototype",
  dsp,
  type: "live",
};

export default dspDefinition;
