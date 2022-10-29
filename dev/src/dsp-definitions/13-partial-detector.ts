import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

//
// consts
//

bands = 12;

//
// input tune
//

tune1 = waveform{69,-1,74,73,71,78,76,73};

tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,0.5)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};

vibrato = +(os.osc(5.0) * 0.2);

synth(gate) = vibrato : -(24.0) : ba.midikey2hz : os.sawtooth : *(gate : si.smoo) : *(0.1);
tune = tunePlayer(tune1) : synth;

//
// find by index
//

scan = ba.selectn(bands, ba.period(bands));

find_by_index(op, n, x) = compute ~ (_,_,_,_) : (!,!,!,_)
  with {
    compute(acc, index, count, val) =
      ba.if(count<n, ba.if(op(acc,x), acc, x), x), // new acc
      ba.if(count<n, ba.if(op(acc,x), index, count), 0), // new index
      ba.if(count<n, count+1, 1), // new count
      ba.if(count<n, val, index); // new val
  };

//
// wet dry
//

wet_dry(fn) = _ <: _ * 0.2,fn;

//
// controls
//

note = hslider("note", 45.0, 20.0, 128.0, 1.0);
q = hslider("q", 5.0, 0.1, 200.0, 0.1);
gain = hslider("gain", 0.5, 0.0, 1.0, 0.1);
follower_release = hslider("follower release", 0.01, 0.0, 0.5, 0.001);

//
// detector
//

notelane(hz) = fi.resonbp(hz,q,gain) : *(0.1) : an.amp_follower(follower_release);
each(i) = notelane(ba.midikey2hz(note + i)) : hbargraph("%i level", 0.0, 1.0);

detect_levels = _ <: par(i,bands,each(i));
levels_to_note = scan : find_by_index(>, bands) : +(note) <: attach(_, hbargraph("detected", 0.0, bands));
play_note(n) = os.square(ba.midikey2hz(n)) : *(0.1);

process = tune : wet_dry(detect_levels : levels_to_note : play_note) : _,_;
`;

const dspDefinition: DspDefinition = {
  id: "partial-detector",
  name: "Partial detector",
  description: "A filter to isolate narrow bands of frequency content",
  dsp,
  type: "live",
};

export default dspDefinition;
