export type DspDefinition = {
  id: string;
  name: string;
  description: string;
  numberOfInputs: number;
  numberOfOutputs: number;
  outputLength: number;
  sampleRate: number;
  dsp: string;
};
