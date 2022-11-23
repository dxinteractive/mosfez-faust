import { useEffect, useState } from "react";
import { DspDefinition, isDspCallback, RenderResultsOutput } from "./types";

export function useDspCallback(
  dspDefinition: DspDefinition,
  liveAudioContext: AudioContext
): RenderResultsOutput[] {
  const [output, setOutput] = useState<RenderResultsOutput[]>([]);

  useEffect(() => {
    if (!isDspCallback(dspDefinition)) return;

    const cleanup = dspDefinition.callback(liveAudioContext, setOutput);
    return () => {
      (async () => (await cleanup)())();
    };
  }, [dspDefinition, liveAudioContext]);

  return output;
}
