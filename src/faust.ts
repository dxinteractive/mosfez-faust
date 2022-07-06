// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { faust } from "./faust-webaudio/webaudio-wasm-wrapper";

export const ready = faust.ready as Promise<undefined>;

export type UIItemGroup = {
  type: "hgroup" | "vgroup" | "tgroup";
  items: UIItem[];
  label: string;
};

export type UIItemNumber = {
  type: "hslider" | "vslider" | "nentry";
  address: string;
  index: number;
  init: number;
  label: string;
  max: number;
  min: number;
  step: number;
};

export type UIItemBoolean = {
  type: "button" | "checkbox";
  address: string;
  index: number;
  label: string;
};

export type UIItemBarGraph = {
  type: "vbargraph" | "hbargraph";
  address: string;
  index: number;
  label: string;
  max: number;
  min: number;
};

export type UIItem =
  | UIItemGroup
  | UIItemNumber
  | UIItemBoolean
  | UIItemBarGraph;

export function isUItemGroup(item: UIItem): item is UIItemGroup {
  return ["hgroup", "vgroup", "tgroup"].includes(item.type);
}

export function isUItemNumber(item: UIItem): item is UIItemNumber {
  return ["hslider", "vslider", "nentry"].includes(item.type);
}

export function isUItemBoolean(item: UIItem): item is UIItemBoolean {
  return ["button", "checkbox"].includes(item.type);
}

export function isUItemBarGraph(item: UIItem): item is UIItemBarGraph {
  return ["vbargraph", "hbargraph"].includes(item.type);
}

export type FaustNode = AudioNode & {
  init: () => void;
  getJSON: () => string;
  ui: UIItem[];
  setParamValue: (path: string, val: number) => void;
  getParamValue: (path: string) => number;
  getNumInputs: () => number;
  getNumOutputs: () => number;
  getParams: () => string[];
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
    throw new Error(faust.error_msg);
  }

  const node: FaustNode = await new Promise((resolve) =>
    faust.createDSPWorkletInstance(factory, audioContext, resolve)
  );

  if (!node) {
    throw new Error(faust.error_msg);
  }

  node.ui = JSON.parse(node.getJSON()).ui;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return node;
}
