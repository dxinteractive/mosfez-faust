import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = os.osc(440.0);
`;

const dspDefinition: DspDefinition = {
  id: "sine-wave",
  name: "Sine wave",
  description: "Makes a sine wave at 440Hz",
  outputLength: 10,
  sampleRate: 44100,
  dsp,
};

export default dspDefinition;
