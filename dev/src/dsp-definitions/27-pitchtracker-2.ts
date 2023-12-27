import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

pitchTracker(N, t, x) = loop ~ _
  with {
      xHighpassed = fi.highpass(1, 20.0, x);
      loop(y) = an.zcr(t, fi.lowpass(N, max(20.0, y), xHighpassed)) * ma.SR * .5;
  };

average_since(max_count, trig, x) = return
  with {
    count = ba.countup(max_count, trig);
    loop(fb, x) = (fb * (trig == 0)) + x;
    return = x : loop ~ _ : /(count + 1);
  };

value_before_increase(hz) = ba.sAndH(hz > hz', hz');

pitchTrackerCleanup(hz) = average_since(9999, hz > hz', hz) : value_before_increase;

// input = (_ * 0.0) + os.osc(440.0);
input = _;
pitch = input : pitchTracker(2, 0.01);
pitch_clean = pitch : pitchTrackerCleanup;
osc = pitch_clean : os.osc * 0.4;
`;

const dspDefinition: DspDefinition = {
  id: "pitch-tracker-2",
  name: "Pitchtracker 2",
  description: "Finds pitch 2",
  dsp,
  type: "offline",
  output: ["input", "pitch", "pitch_clean", "osc"],
  inputFile: "/audio/cycfi-q-pitch-test/Hammer-Pull High E.wav",
  inputOffset: 26000,
  outputLength: 26000,
  sampleRate: 48000,
  channels: 1,
};

export default dspDefinition;
