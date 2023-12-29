import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// osc
a = button("a");
b = button("b");
c = button("c");
gate = a | b | c;
pitch = ba.if(a, 60, ba.if(b, 62, 63));

// env
volA = hslider("attack",0.01,0.01,4,0.01);
volD = hslider("decay",2.6,0.01,8,0.01);
volS = hslider("sustain",1,0,1,0.01);
volR = hslider("release",2.0,0.01,8,0.01);

envelop = en.adsre(volA,volD,volS,volR,gate);

osc(f) = os.osc(f) + (os.osc(f * 2.0) * 0.2) + (os.osc(f * 6.0) * 0.1);

fx = osc(pitch : ba.midikey2hz) * envelop * 0.3;

process = fx <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "additive-synth",
  name: "Additive synth",
  description: "Additive synth",
  dsp,
  type: "live",
};

export default dspDefinition;
