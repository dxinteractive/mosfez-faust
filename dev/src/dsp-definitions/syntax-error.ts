import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = os.osc(440.0) <: ;
`;

const dspDefinition: DspDefinition = {
  id: "syntax-error",
  name: "Syntax error",
  description: "Shows what happens if the dsp contains a syntax error.",
  dsp,
  type: "offline",
  outputLength: 10,
  sampleRate: 44100,
  channels: 1,
};

export default dspDefinition;
