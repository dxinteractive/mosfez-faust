import React from "react";
import { DspDefinition, isDspComponent } from "./types";

export function useDspComponent(
  dspDefinition: DspDefinition,
  liveAudioContext: AudioContext
): React.ReactElement | null {
  if (!isDspComponent(dspDefinition)) return null;

  return dspDefinition.component(liveAudioContext);
}
