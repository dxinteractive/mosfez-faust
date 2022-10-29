import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// osc
gate = button("gate");
pitch = hslider("pitch", 69, 0, 128, 0.0001) : si.smoo;

// env
volA = hslider("attack",0.01,0.01,4,0.01);
volD = hslider("decay",2.6,0.01,8,0.01);
volS = hslider("sustain",0.2,0,1,0.01);
volR = hslider("release",2.0,0.01,8,0.01);

// osc
pmGain = hslider("pm_gain",500.0,0.0,1000.0,1.0) : si.smoo;
pmMulti = hslider("pm_multi",10.0,1.0,24.0,1.0) : si.smoo;
pmDenom = hslider("pm_denom",2.0,1.0,24.0,1.0) : si.smoo;

envelop = hgroup("group", en.adsre(volA,volD,volS,volR,gate));
vol = envelop;

osc(f) = os.osc(f + (pmGain * envelop * os.osc(f * pmMulti / pmDenom))) : fi.dcblocker;

fx = osc(pitch : ba.midikey2hz) * vol * 0.3;

process = fx <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "pm-synth",
  name: "PM synth",
  description: "Phase modulation synth",
  dsp,
  type: "live",
};

export default dspDefinition;
