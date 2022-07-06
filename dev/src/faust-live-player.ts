import { useEffect, useRef, useState } from "react";
import type { DspDefinition } from "./types";

import { compile, FaustNode } from "mosfez-faust/faust";
import type { UIItem } from "mosfez-faust/faust";
import { touchStart } from "mosfez-faust/touch-start";

const audioContext = new window.AudioContext();
touchStart(audioContext);

export type UseFaustLivePlayerResult = {
  ui: UIItem[];
  params: string[];
  node: FaustNode;
};

export function useFaustLivePlayer(
  dspDefinition: DspDefinition
): UseFaustLivePlayerResult | undefined {
  const effectCountRef = useRef(0);
  const audioNode = useRef<FaustNode>();
  const [result, setResult] = useState<UseFaustLivePlayerResult | undefined>();

  useEffect(() => {
    if (dspDefinition.type !== "live") return;
    const count = ++effectCountRef.current;

    compile(audioContext, dspDefinition.dsp).then((node) => {
      if (effectCountRef.current !== count) return;
      node.connect(audioContext.destination);
      audioNode.current = node;

      setResult({
        ui: node.ui,
        params: node.getParams(),
        node,
      });
    });

    return () => {
      if (audioNode.current) {
        audioNode.current.disconnect();
        audioNode.current.destroy();
      }
    };
  }, [dspDefinition]);

  return result;
}
