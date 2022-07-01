import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = os.sawtooth(1000.0);
`;

const dspDefinition: DspDefinition = {
  id: "sine-wave",
  name: "Sine wave",
  description: "Makes a sine wave at 440Hz",
  numberOfInputs: 0,
  numberOfOutputs: 1,
  outputLength: 10,
  sampleRate: 44100,
  dsp,
};

export default dspDefinition;
