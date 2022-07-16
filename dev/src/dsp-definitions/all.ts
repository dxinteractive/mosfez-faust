import type { DspDefinition } from "../types";

import sineWave from "./sine-wave";
import attenuator from "./attenuator";
import blockMax from "./block-max";
import liveTune from "./live-tune";
import syntaxError from "./syntax-error";
import pmSynth from "./pm-synth";
import paramLayers from "./param-layers";
import passthroughMono from "./passthrough-mono";
import passthroughStereo from "./passthrough-stereo";

export const all: DspDefinition[] = [
  sineWave,
  attenuator,
  blockMax,
  liveTune,
  syntaxError,
  pmSynth,
  paramLayers,
  passthroughMono,
  passthroughStereo,
];
