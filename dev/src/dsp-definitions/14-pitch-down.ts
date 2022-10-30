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
bypass_fade_time = 0.005;

trigger = button("trigger");
speed = hslider("speed",0.95,0.0,1.0,0.0001) : si.smoo;

sweep_at_speed(period,run,speed) = period,run : %(int(*:max(1)))~+(speed);

trigger_with_tail = en.asr(0,1.0,bypass_fade_time,trigger) <: attach(_, hbargraph("trigger out", 0, 1)) : _ > 0;
read_index = sweep_at_speed(tablesize, trigger_with_tail, speed) <: attach(_, hbargraph("read", 0, tablesize));
write_index = ba.sweep(tablesize, trigger) <: attach(_, hbargraph("write", 0, tablesize));
table = _ <: it.frwtable(2,tablesize,0.0,write_index,_,read_index);

bypass_fade_time_samples = bypass_fade_time * ma.SR : int;
process = input : ba.bypass_fade(bypass_fade_time_samples, trigger == 0, table) <: _,_;
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
