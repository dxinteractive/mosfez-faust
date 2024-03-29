import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = *(0.5),*(0.25);
`;

const dspDefinition: DspDefinition = {
  id: "attenuator",
  name: "Attenuator",
  description: "Makes an input signal quieter",
  dsp,
  type: "offline",
  input: [
    [4, 3, 2, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5],
    [4, 3, 2, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5],
  ],
  channels: 2,
  sampleRate: 44100,
};

export default dspDefinition;
