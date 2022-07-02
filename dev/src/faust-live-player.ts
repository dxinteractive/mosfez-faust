import { useEffect, useRef } from "react";
import type { DspDefinition } from "./types";

import Faust, { FaustNode } from "mosfez-faust/faust";
import touchStart from "mosfez-faust/touch-start";

const audioContext = new window.AudioContext();
touchStart(audioContext);

const faust = new Faust();

export function useFaustLivePlayer(dspDefinition: DspDefinition) {
  const effectCountRef = useRef(0);
  const audioNode = useRef<FaustNode>();

  useEffect(() => {
    if (dspDefinition.type !== "live") return;
    const count = ++effectCountRef.current;

    faust.compileNode(audioContext, dspDefinition.dsp).then((node) => {
      if (effectCountRef.current !== count) return;
      node.connect(audioContext.destination);
      audioNode.current = node;
    });

    return () => {
      if (audioNode.current) {
        audioNode.current.disconnect();
        audioNode.current.destroy();
      }
    };
  }, [dspDefinition]);
}
