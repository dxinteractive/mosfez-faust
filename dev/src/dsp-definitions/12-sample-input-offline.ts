import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
input = _,_;
louder = *(4.0);
process = input : louder,louder;
`;

const dspDefinition: DspDefinition = {
  id: "sample-input-offline",
  name: "Sample input",
  description: "Pipes a sample into an offline render",
  dsp,
  type: "offline",
  inputFile: "/audio/tonejs-instruments/harp/B5.wav",
  output: ["input", "process"],
  outputLength: 44100,
  sampleRate: 44100,
  channels: 1,
};

export default dspDefinition;
