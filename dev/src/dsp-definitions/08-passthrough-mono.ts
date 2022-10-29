import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = _;
`;

const dspDefinition: DspDefinition = {
  id: "passthrough-mono",
  name: "Passthrough mono",
  description: "Passes through a single mono signal",
  dsp,
  type: "live",
};

export default dspDefinition;
