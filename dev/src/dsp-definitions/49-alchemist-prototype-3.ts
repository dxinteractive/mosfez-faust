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
// alchemist.dsp - bass compressor, trem, detune
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

// consts

// input
//
//   B
// A   C
//   D
//
//     * detune
// * side * trem
//     * width

sidechain_param = hslider("sidechain[OWL:A]", 0., 0., 1., .001) : reject_noise(0.05, 1.0) : si.smoo;
detune_param = hslider("detune[OWL:B]", 0., 0., 1., .001) : reject_noise(0.05, 1.0) : si.smoo;
trem_param = hslider("trem[OWL:C]", 0., 0., 1., .001) : reject_noise(0.05, 1.0) : si.smoo;
width_param = hslider("width[OWL:D]", 0., 0., 1., .001) : reject_noise(0.05, 1.0) : si.smoo;

detune_on = button("detune_on[OWL:B1]") : ba.toggle;
trem_on = button("trem_on[OWL:B2]") : ba.toggle;

// fx
wet_amount_detune = ba.if(detune_param < 2/3, ba.if(detune_param < 1/3, .1, .3), .5);
wet_amount = ba.if(detune_on, wet_amount_detune, 1.);
detune_amount = detune_param : *(3.) : %(1.) : *(.2);

gtr_detune_l = ef.transpose(ma.SR * .003, ma.SR * .003 * .9, -detune_amount);
gtr_detune_r = ef.transpose(ma.SR * .0041, ma.SR * .0041 * .9, -detune_amount * .5);
gtr_detune_lr = gtr_detune_l,gtr_detune_r;
gtr_detune = ba.bypass2(detune_on : ==(0), gtr_detune_lr);

trem_depth = ba.if(trem_param < 2/3, ba.if(trem_param < 1/3, .3, .6), 1.);
trem_speed = trem_param : *(3.) : %(1.) : lerp(-2., 4.) : pow(2.);

gtr_trem_gain = lerp(1. - trem_depth, 1. + trem_depth, os.osc(trem_speed) * .5 + .5);
gtr_trem_l = *(gtr_trem_gain);
gtr_trem = ba.bypass1(trem_on : ==(0), gtr_trem_l);

gtr_sidechain = ba.lin2LogGain(1. - sidechain_param);
gtr_gain_amount = wet_amount * gtr_sidechain;
gtr_gain = *(gtr_gain_amount);

// stereo-wide / stereo-narrow / mono-panned / mono-autopan / offset / pingpong

gtr_width(l,r) = return with {
  p(a,b,l,r) = return with {
    gain = (width_param >= a) & (width_param < b);
    return = l * gain,r * gain;
  };

  p0 = 0.;
  p1 = .07;
  p2 = .13;
  p3 = .2;
  p4 = .4;
  p5 = .6;
  p6 = .8;
  p7 = 1.;

  p55 = (p5 + p6) * .5;
  p65 = (p6 + p7) * .5;

  pan_amount_static = unlerp(p2,p4,width_param);
  pan_amount_auto = os.osc(unlerp(p4,p5,width_param) : lerp(.01, .5)) * .5 + .5;
  pan_amount = ba.if(width_param < p4, pan_amount_static, pan_amount_auto);

  del_max = ma.SR;

  d(a,b,x) = return with {
    gain = (width_param >= a) & (width_param < b);
    return = x * gain;
  };

  del_la = unlerp(p55,p6,width_param) : lerp(0.,del_max) : d(p55,p6);
  del_lb = unlerp(p6,p65,width_param) : lerp(del_max * .5, 0.) : d(p6,p65);
  del_lc = unlerp(p65,p7,width_param) : lerp(0.,del_max) : d(p65,p7);
  del_l = del_la + del_lb + del_lc;

  del_ra = unlerp(p5,p55,width_param) : lerp(del_max, 0.) : d(p5,p55);
  del_rb = unlerp(p6,p65,width_param) : lerp(del_max, 0.) : d(p6,p65);
  del_rc = unlerp(p65,p7,width_param) : lerp(0., del_max * .5) : d(p65,p7);
  del_r = del_ra + del_rb + del_rc;

  del_vol = ba.if(width_param < p6, 1., .5);

  stereo = p(p0,p1);
  narrow(l,r) = l*.75+r*.25,r*.75+l*.25 : p(p1,p2);
  mono = _,! <: p(p2,p3);
  pan = constantPowerPan(pan_amount) : p(p3,p5);
  offset = de.delay(del_max,del_l),de.delay(del_max,del_r) : *(del_vol),*(del_vol) : p(p5,p7);
  
  return = l,r <: stereo,narrow,mono,pan,offset :> _,_;
};

gtr = gtr_gain : gtr_trem <: gtr_detune : gtr_width;

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
 * detune = - vol 10%: depth 0 ... 100%
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
 *   - tap: enable / disable detune
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
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * */
