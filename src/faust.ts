// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { faust } from "./faust-webaudio/webaudio-wasm-wrapper";

export const ready = faust.ready as Promise<undefined>;

// this isn't complete
export type FaustNode = AudioNode & {
  init: () => void;
  getJSON: () => string;
  setParamValue: (path: string, val: number) => void; // TODO confirm if always number
  getParamValue: (path: string) => number;
  getNumInputs: () => number;
  getNumOutputs: () => number;
  getParams: () => unknown[]; // TODO fill this in
  destroy: () => void;
};

export async function compile(
  audioContext: AudioContext | OfflineAudioContext,
  dsp: string
): Promise<FaustNode> {
  const argv = ["-ftz", "2", "-I", "http://127.0.0.1:8000/../../libraries/"];

  const factory = await new Promise((resolve) =>
    faust.createDSPFactory(dsp, argv, resolve)
  );

  if (!factory) {
    throw new Error("factory failed");
  }

  const node = await new Promise((resolve) =>
    faust.createDSPWorkletInstance(factory, audioContext, resolve)
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return node;
}
