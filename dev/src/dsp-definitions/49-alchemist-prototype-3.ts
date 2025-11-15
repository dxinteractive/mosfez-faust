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

//
// alchemist.dsp - bass compressor, trem, chorus
//

// utils

counter(trig) = upfront(trig) : + ~ _ with { upfront(x) = x > x'; };

lerp(a, b, x) = a + (b - a) * x;
unlerp(a, b, x) = (x - a) / (b - a);

constantPowerPan(p, x, y) = x*gainLeft, y*gainRight
with {
    theta = ma.PI*p/2.;
    gainLeft = cos(theta)/sqrt(2.)*2.;
    gainRight = sin(theta)/sqrt(2.)*2.;
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

shortPress(time, trig) = return with {
  up_while_press = ba.countup(time, trig == 0);
  on_release = trig < trig';
  held_enough = up_while_press < time;
  return = held_enough' & on_release;
};

// consts

// input
//
//   B
// A   C
//   D
//
//     * trem
// * side * chorus
//     * multi

sidechain_param = hslider("sidechain[OWL:A]", 0., 0., 1., .001) : reject_noise(0.05, 1.0) : si.smoo;
trem_param = hslider("trem[OWL:B]", 0., 0., 1., .001) : reject_noise(0.05, 1.0) : si.smoo;
chorus_param = hslider("chorus[OWL:C]", 0., 0., 1., .001) : reject_noise(0.05, 1.0) : si.smoo;
multi_param = hslider("multi[OWL:D]", 0., 0., 1., .001) : reject_noise(0.05, 1.0) : si.smoo;



button_a = button("button_a[OWL:B1]");
button_b = button("button_b[OWL:B2]");
button_a_short = button_a : shortPress(ma.SR * .2);
button_b_short = button_b : shortPress(ma.SR * .2);

// fx
trem_on = button_a_short : ba.toggle;
chorus_on = button_b_short : ba.toggle;

wet_amount_chorus = ba.if(chorus_param < 2/3, ba.if(chorus_param < 1/3, .1, .3), .5);
wet_amount = ba.if(chorus_on, wet_amount_chorus, 1.);
chorus_amount = chorus_param : *(3.) : %(1.) : *(.2);

gtr_chorus_l = ef.transpose(ma.SR * .003, ma.SR * .003 * .9, -chorus_amount);
gtr_chorus_r = ef.transpose(ma.SR * .0041, ma.SR * .0041 * .9, -chorus_amount * .5);
gtr_chorus_lr = gtr_chorus_l,gtr_chorus_r;
gtr_chorus = ba.bypass2(chorus_on : ==(0), gtr_chorus_lr);

trem_depth = ba.if(trem_param < 2/3, ba.if(trem_param < 1/3, .3, .6), 1.);
trem_speed = trem_param : *(3.) : %(1.) : lerp(-2., 4.) : pow(2.);

gtr_trem_gain = lerp(1. - trem_depth, 1. + trem_depth, os.osc(trem_speed) * .5 + .5);
gtr_trem_l = *(gtr_trem_gain);
gtr_trem = ba.bypass1(trem_on : ==(0), gtr_trem_l);

gtr_sidechain = ba.lin2LogGain(1. - sidechain_param);
gtr_gain_amount = wet_amount * gtr_sidechain;
gtr_gain = *(gtr_gain_amount);



gtr = gtr_gain : gtr_trem <: gtr_chorus;

bass_gate = ef.gate_mono(-64., .005, 0., 1.);
bass_comp = co.compressor_mono(32., -34., 0., .4);
bass_makeup =  *(3.);
bass = bass_gate : bass_comp : bass_makeup <: _,_;

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

/**
 * PARAMS:
 *
 * chorus = - vol 10%: depth 0 ... 100%
 *          - vol 30%: depth 0 ... 100%
 *          - vol 50%: depth 0 ... 100%
 *
 * trem = - depth 30%: rate .2Hz ... 10Hz
 *        - depth 60%: rate .2Hz ... 10Hz
 *        - depth 100%: rate .2Hz ... 10Hz
 *
 * width = various
 *
 * sidechain = - volume decrease: 0 ... 100%
 *
 * BUTTONS:
 *
 * A:
 *   - tap: enable / disable chorus
 *   - hold + B: NOT IMPLEMENTED
 *               select sidechain mode?
 *               - volume
 *               - low pass
 *               - high pass
 *               - reverb swell ??????
 *
 * B:
 *   - tap: enable / disable trem
 *   - hold + A: NOT ASSIGNED
 * */
