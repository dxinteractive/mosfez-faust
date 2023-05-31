import React from "react";

export type DspDefinitionCommon = {
  id: string;
  name: string;
  description: string;
};

export type DspDefinitionLive = DspDefinitionCommon & {
  type: "live";
  dsp: string;
};

export type DspDefinitionOffline = DspDefinitionCommon & {
  type: "offline";
  dsp: string;
  channels: number;
  sampleRate: number;
  input?: number[][];
  inputOffset?: number;
  inputFile?: string;
  output?: string[];
  outputLength?: number;
  expect?: Record<string, number[][]>;
};

export type DspDefinitionComponent = DspDefinitionCommon & {
  type: "component";
  component: (liveAudioContext: AudioContext) => React.ReactElement;
};

export type RenderResultsOutput = {
  name: string;
  output: Float32Array[];
};

export type RenderResults = (outputs: RenderResultsOutput[]) => void;

export type DspDefinitionCallback = DspDefinitionCommon & {
  type: "callback";
  callback: (
    audioContext: AudioContext,
    renderResult: RenderResults
  ) => Promise<() => void>;
};

export type DspDefinition =
  | DspDefinitionOffline
  | DspDefinitionLive
  | DspDefinitionComponent
  | DspDefinitionCallback;

export function isDspLive(
  dspDefinition: DspDefinition
): dspDefinition is DspDefinitionLive {
  return dspDefinition.type === "live";
}

export function isDspOffline(
  dspDefinition: DspDefinition
): dspDefinition is DspDefinitionOffline {
  return dspDefinition.type === "offline";
}

export function isDspComponent(
  dspDefinition: DspDefinition
): dspDefinition is DspDefinitionComponent {
  return dspDefinition.type === "component";
}

export function isDspCallback(
  dspDefinition: DspDefinition
): dspDefinition is DspDefinitionCallback {
  return dspDefinition.type === "callback";
}
