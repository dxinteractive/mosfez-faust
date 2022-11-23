import type { DspDefinition } from "../types";

const { maxChannelCount } = new AudioContext().destination;

const dsp = `
import("stdfaust.lib");
channels = ${maxChannelCount};
now = int(os.phasor(channels,1.0));
vibrato = +(os.osc(10.0) * 0.2);
tone(i) = ((i * 2) + 49) : vibrato : ba.midikey2hz : os.osc : *(i == now) : *(0.1);
process = par(i,channels,tone(i));
`;

const dspDefinition: DspDefinition = {
  id: "output-channel-test",
  name: "Output channel test",
  description: `Puts a test tone out of each of your ${maxChannelCount} output channels`,
  dsp,
  type: "live",
};

export default dspDefinition;
