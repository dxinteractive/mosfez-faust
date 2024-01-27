import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
process = _;
`;

const files = {
  a: "/audio/freesound/667253__garuda1982__electric-guitar-melody-2.mp3",
  b: "/audio/freesound/706196__garuda1982__sad-electric-guitar-loop-for-background-music.wav",
};

const dspDefinition: DspDefinition = {
  id: "recorded-guitar",
  name: "Recorded guitar",
  description:
    "Plays a freesound recording of a guitar sound from garuda1982 with no alterations",
  dsp,
  type: "live",
  inputFile: files.b,
};

export default dspDefinition;
