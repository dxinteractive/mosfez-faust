import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

velocity(x) = x - x';
envelope_threshold(on, off, x) = x > on, x < off : ba.on_and_off;

input = _;
envelope = input : an.amp_follower_ar(0.0,0.1);
// envelope_velocity = envelope : velocity;

envelope_velocity = input : fi.lowpass(3, 40) : an.amp_follower_ar(0.0,0.01);
threshold = envelope : envelope_threshold(0.1, 0.005);
`;

const dspDefinition: DspDefinition = {
  id: "envelope-detector",
  name: "Envelope detector",
  description: "Envelope detector",
  dsp,
  type: "offline",
  // inputFile: "/audio/cycfi-q-pitch-test/Hammer-Pull High E.wav",
  // inputOffset: 24200,
  // inputFile: "/audio/cycfi-q-pitch-test/SingleStaccato.wav",
  // inputOffset: 1951,
  // inputFile: "/audio/cycfi-q-pitch-test/Attack-Reset.wav",
  inputFile: "/audio/cycfi-q-pitch-test/Tapping D.wav",
  inputOffset: 30400,
  output: ["input", "envelope", "envelope_velocity", "threshold"],
  outputLength: 52000,
  sampleRate: 48000,
  channels: 1,
};

export default dspDefinition;
