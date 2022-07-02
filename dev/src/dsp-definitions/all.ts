import type { DspDefinition } from "../types";

import sineWave from "./sine-wave";
import attenuator from "./attenuator";
import blockMax from "./block-max";
import liveTune from "./live-tune";

export const all: DspDefinition[] = [sineWave, attenuator, blockMax, liveTune];
