export type DspDefinitionCommon = {
  id: string;
  name: string;
  description: string;
  dsp: string;
};

export type DspDefinitionLive = DspDefinitionCommon & {
  type: "live";
};

export type DspDefinitionOffline = DspDefinitionCommon & {
  type: "offline";
  sampleRate: number;
  input?: number[][];
  output?: string[];
  outputLength?: number;
  expect?: Record<string, number[][]>;
};

export type DspDefinition = DspDefinitionOffline;
