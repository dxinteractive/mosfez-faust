import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = os.osc(440.0);
`;

const dspDefinition: DspDefinition = {
  id: "sine-wave",
  name: "Sine wave",
  description: "Makes a sine wave at 440Hz",
  dsp,
  type: "offline",
  outputLength: 10,
  sampleRate: 44100,
  channels: 1,
};

export default dspDefinition;
