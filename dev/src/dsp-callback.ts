import { useEffect } from "react";
import { DspDefinition, isDspCallback } from "./types";

export function useDspCallback(
  dspDefinition: DspDefinition,
  liveAudioContext: AudioContext
) {
  useEffect(() => {
    if (!isDspCallback(dspDefinition)) return;

    const cleanup = dspDefinition.callback(liveAudioContext);
    return () => {
      (async () => (await cleanup)())();
    };
  }, [dspDefinition, liveAudioContext]);
}
