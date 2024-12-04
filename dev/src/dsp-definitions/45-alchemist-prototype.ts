import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// synth

tune1 = waveform{48,-1,47,-1,40,-1,43,-1};
tune2 = waveform{24,-1,-1,-1,28,-1,-1,-1};
tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,0.2)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0) : en.adsre(0.01,2.0,0.2,1.0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};
synth(gate) = ba.midikey2hz : os.triangle : *(gate) : *(0.2);
input1 = tunePlayer(tune1) : synth;
input2 = tunePlayer(tune2) : synth;

// fx

channel1 = input1 <: _,_; // : _,de.fdelay(ma.SR, ma.SR * 0.59);
channel2 = input2 <: _,_;

process = channel1, channel2 :> _,_;
`;

const dspDefinition: DspDefinition = {
  id: "alchemist-prototype",
  name: "alchemist prototype",
  description: "Makes a live tune and puts through alchemist prototype",
  dsp,
  type: "live",
};

export default dspDefinition;
