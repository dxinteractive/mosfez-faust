import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

tune1 = waveform{69,-1,73,-1,71,73,71,0};
tune2 = waveform{73,-1,76,-1,74,76,74,0};
tune3 = waveform{45,-1,0,0,40,-1,0,0};

tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,1.0)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};

vibrato = +(os.osc(10.0) * 0.2);

synth(gate) = vibrato : ba.midikey2hz : os.osc : *(gate) : *(0.1);


voice1 = tunePlayer(tune1) : synth;
voice2 = tunePlayer(tune2) : synth;
voice3 = tunePlayer(tune3) : synth;

process = voice1 + voice2 + voice3 <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "live-tune",
  name: "Live tune",
  description: "Makes a live tune",
  dsp,
  type: "live",
};

export default dspDefinition;
