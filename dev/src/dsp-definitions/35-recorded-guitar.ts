import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = _ <: *(1.0),*(1.0);
`;

const dspDefinition: DspDefinition = {
  id: "recorded-guitar",
  name: "Recorded guitar",
  description:
    "Plays a freesound recording of a guitar sound from yellowtree with no alterations",
  dsp,
  type: "live",
  inputFile: "/audio/freesound/584282__yellowtree__clean-guitar-loop.wav",
  loopLength: 20,
};

export default dspDefinition;
