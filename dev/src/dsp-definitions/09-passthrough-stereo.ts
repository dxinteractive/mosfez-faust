import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = _,_;
`;

const dspDefinition: DspDefinition = {
  id: "passthrough-stereo",
  name: "Passthrough stereo",
  description: "Passes through a stereo signal",
  dsp,
  type: "live",
};

export default dspDefinition;
