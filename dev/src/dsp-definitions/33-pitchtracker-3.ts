import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

// settings

// utils

reduce_while(reducer, trig, x) = x : loop ~ _
with {
  loop(prev, next) = ba.if(trig, next, reducer(prev, next));
};

max_while = reduce_while(max);

// process

input = _;
envelope = an.amp_follower_ar(0.0,0.1);
start_note = envelope : >(0.1) : ba.impulsify;

amplitude = an.amp_follower_ar(0.0,0.01) : max(0.05);
compress(x) = x / amplitude(x) * 10;

prep = fi.dcblockerat(40.0) : max(0.0);

zippy = prep : compress;
tick = prep : compress : >=(9) : ba.impulsify;
tick_rise = tick : ba.countup(9999);



// tick = prep : zippy : >(0.5) : ==(0) : ba.countup(9999); // can get too swamped with similar sized spikes
// osc = best_match : os.osc * 0.4;
`;

const dspDefinition: DspDefinition = {
  id: "pitchtracker-3",
  name: "Pitch tracker 3",
  description: "Tracks pitch 3",
  dsp,
  type: "offline",
  output: ["input", "tick", "tick_rise", "start_note", "amplitude", "zippy"],

  // inputFile: "/audio/cycfi-q-pitch-test/GStaccato.wav",
  // inputOffset: 25400,
  // outputLength: 192000,

  // inputFile: "/audio/cycfi-q-pitch-test/2c-A-24th.wav",
  // inputOffset: 7624,
  // outputLength: 20000, // 27921, // 192000,

  inputFile: "/audio/cycfi-q-pitch-test/1a-Low-E.wav",
  inputOffset: 47500,
  outputLength: 55000, // 27921, // 192000,

  // inputFile: "/audio/cycfi-q-pitch-test/Tapping D.wav",
  // inputOffset: 30400,
  // outputLength: 88200,

  // inputFile: "/audio/cycfi-q-pitch-test/Hammer-Pull High E.wav",
  // inputOffset: 26000,
  // outputLength: 40000,

  sampleRate: 48000,
  channels: 1,
};

export default dspDefinition;
