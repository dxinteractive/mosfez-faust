import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = _ <: _,_;
`;

const dspDefinition: DspDefinition = {
  id: "c4-blops-live",
  name: "C4 blops live",
  description: "Plays blops from the C4 for processing",
  inputFile: "/audio/recorded/c4-blops.wav",
  loopLength: 2.46,
  dsp,
  type: "live",
};

export default dspDefinition;
