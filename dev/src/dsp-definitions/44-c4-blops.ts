import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
input = _;
process = _ <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "c4-blops",
  name: "C4 blops",
  description: "Plays blops from the C4 for processing",
  inputFile: "/audio/recorded/c4-blops.wav",
  dsp,
  type: "offline",
  channels: 1,
  sampleRate: 48000,
  output: ["input", "process"],
  outputLength: 48000 * 2.46,
};

export default dspDefinition;
