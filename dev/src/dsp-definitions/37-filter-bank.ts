import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

wet_param = 1.6;
dry_param = 0.4;

noise = no.pink_noise : fi.highpass(2, 800.0) : fi.lowpass(2, 3000.0);

wet = _ : co.compressor_mono(8.0,-24.0,0.001,0.1) : ve.vocoder(16,0.001,0.2,2.0,_,noise) : *(wet_param) <: _,_;

// wet = _ : an.amp_follower_ar(0.0,0.1) * noise <: _,_;

dry = *(dry_param);
process = _ <: (dry <: _,_),wet :> _,_;
`;

const dspDefinition: DspDefinition = {
  id: "filter-bank",
  name: "Filter bank",
  description: "Playing with filter banks, vocoders, panning, EQ",
  dsp,
  type: "live",
  inputFile: "/audio/freesound/584282__yellowtree__clean-guitar-loop.wav",
  loopLength: 20,
};

export default dspDefinition;
