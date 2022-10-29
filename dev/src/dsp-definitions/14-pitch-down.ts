import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

//
// input tune
//

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

input = voice1 + voice2 + voice3;

//
// pitch down
//

tablesize = 100000;

trigger = button("trigger");
speed = hslider("speed",0.95,0.0,1.0,0.0001) : si.smoo;

sweep_at_speed(period,run,speed) = period,run : %(int(*:max(1)))~+(speed);

read_index = sweep_at_speed(tablesize, trigger, speed) <: attach(_, hbargraph("read", 0, tablesize)) : int;
write_index = ba.sweep(tablesize, trigger) <: attach(_, hbargraph("write", 0, tablesize));
table = it.frwtable(2,tablesize,0.0,write_index,_,read_index);

process = input : table <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "pitch-down",
  name: "Pitch down",
  description:
    "Captures live input and plays it back slightly slower on a trigger",
  dsp,
  type: "live",
};

export default dspDefinition;
