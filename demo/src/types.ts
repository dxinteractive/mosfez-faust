export type DspDefinition = {
  id: string;
  name: string;
  description: string;
  dsp: string;
  sampleRate: number;
  input?: number[][];
  output?: string[];
  outputLength?: number;
  expect?: Record<string, number[][]>;
};
