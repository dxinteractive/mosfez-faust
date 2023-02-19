import { useEffect, useRef, useState } from "react";
import { DspDefinition, isDspCallback, RenderResultsOutput } from "./types";

export function useDspCallback(
  dspDefinition: DspDefinition,
  liveAudioContext: AudioContext
): RenderResultsOutput[] {
  const [output, setOutput] = useState<RenderResultsOutput[]>([]);

  const started = useRef(false);

  useEffect(() => {
    if (!isDspCallback(dspDefinition) || started.current) return;
    started.current = true;

    const cleanup = dspDefinition.callback(liveAudioContext, setOutput);
    return () => {
      (async () => (await cleanup)())();
    };
  }, [dspDefinition, liveAudioContext]);

  return output;
}
