import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

//
// synth
//

tune1 = waveform{65,-1,-1,68,-1,-1,-1,-1,65,-1,-1,66,-1,-1,-1,-1};
tune2 = waveform{-1,-70,-1,-1,-1,-1,-1,-1,-1,-70,-1,-1,-1,-1,-1,-1};
tune3 = waveform{-1,-1,-72,-1,-1,-1,-1,-1,-1,-1,-72,-1,-1,-1,-1,-1};
tune4 = waveform{53,-1,-1,-1,56,-1,-1,-1,53,-1,-1,-1,51,-1,-1,-1};

tunePlayer(tune) = tuneAmp,tuneFreq
with {
    tuneNow = tune,int(os.phasor(16,0.15)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0);
    tuneAmp = en.adsre(0.0001,1.0,0.0001,3.0,tuneGate);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};

vibrato = +(os.osc(4.0) * 0.1);

synthVoice(gate) = vibrato : ba.midikey2hz : os.osc : *(gate) : *(0.1);


voice1 = tunePlayer(tune1) : synthVoice;
voice2 = tunePlayer(tune2) : synthVoice;
voice3 = tunePlayer(tune3) : synthVoice;
voice4 = tunePlayer(tune4) : synthVoice;

synth = voice1 + voice2 + voice3 + voice4 <: _,_;

//
// noise
//

noise = no.pink_noise : fi.highpass(2, 3200.0) : fi.lowpass(2, 12800.0);

//
// program
//

total = 2;
each(i) = _ : de.delay(ma.SR * 1.0, ma.SR * 1.0 * ((i + 1) / total)) : sp.panner(i * (total - 1)) : _,_;
delays = _ <: par(i, total, each(i)) :> _,_;
noiseMaker = ve.vocoder(16,0.001,0.2,2.0,_,noise) : *(1.0) <: _,_;
noiseMakerWithDry = _ <: _,noiseMaker :> _;

wet = _ : noiseMakerWithDry : delays : _,_;
dry = *(1.0);
process = synth <: (dry <: _,_),wet :> _,_;
`;

const dspDefinition: DspDefinition = {
  id: "cloudify",
  name: "Cloudify",
  description:
    "Adds a set of panned delay lines fading in and out and mixes in sound effects from a secondary input",
  dsp,
  type: "live",
};

export default dspDefinition;
