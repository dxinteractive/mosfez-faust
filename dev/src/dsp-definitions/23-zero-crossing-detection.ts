import type { DspDefinition } from "../types";

// : fi.lowpass(1, 997.0)

// wavecountup = input : cross_up : ba.countup(ma.SR);
// lastcount(x) = ba.sAndH(x == 0, x');
// wavelength = wavecountup : lastcount;

// count_pulse(amount, p) = p : ((+ : %(amount)) ~ _);
// each_pulse(amount, offset, p) = p & (count_pulse(amount, p) == offset);

// pitch_tracker(N, t, x) = loop ~ _
// with {
//     xHighpassed = fi.highpass(1, 20.0, x);
//     loop(y) = an.zcr(t, fi.lowpass(N, max(20.0, y), xHighpassed)) * ma.SR * .5;
// };
// tracked = pitch_tracker(2, 0.1);

// sign(x) = ba.if(x > 0, 1, 0);
// detect_crossing(x) = sign(x) != sign(x');
// detect_crossing_up = sign : ba.impulsify;

// score_pulse_length(p) = ba.countup(10000, p') : ba.sAndH(p);

// input = _;
// input_lp = _ : fi.lowpass(2, 200.0);
// cross_up = input_lp : fi.dcblocker : ef.gate_mono(-20.0,0.0001,1.0,0.0001) : detect_crossing_up;
// cross_up2 = input_lp : fi.dcblocker : ef.gate_mono(-20.0,0.0001,1.0,0.0001) : fi.lowpass(2, 800.0) : detect_crossing_up;

// cross_up_2_1 = cross_up : ba.resetCtr(2, 1);
// cross_up_2_1_length = cross_up : ba.resetCtr(2, 1) : score_pulse_length;
// cross_up_3_1_length = cross_up : ba.resetCtr(3, 1) : score_pulse_length;
// cross_up_4_1_length = cross_up : ba.resetCtr(4, 1) : score_pulse_length;

const dsp = `
import("stdfaust.lib");
input = _;
filtered(i) = fi.lowpass(2, pow(2, i) * 100.0);
all_filtered = input <: par(i, 3, filtered(i));
`;

const dspDefinition: DspDefinition = {
  id: "zero-crossing-detection",
  name: "Zero crossing detection",
  description: "Finds zero crossings",
  dsp,
  type: "offline",
  // inputFile: "/audio/tonejs-instruments/harp/B5.wav",
  inputFile: "/audio/tonejs-instruments/guitar-acoustic/E2.mp3",
  // inputFile: "/audio/tonejs-instruments/guitar-acoustic/A4.mp3",
  output: [
    "input",
    "all_filtered",
    // "input_lp",
    // "cross_up",
    // "cross_up2",
    // "tracked",
    // "cross_up_2_1_length",
    // "cross_up_3_1_length",
    // "cross_up_4_1_length",
  ],
  outputLength: 44100,
  sampleRate: 44100,
  channels: 3,
};

export default dspDefinition;
