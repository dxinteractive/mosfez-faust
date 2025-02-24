import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

noise_amount = 0.02;
noisy_knob = hslider("knob", 0.0, 0.0, 1.0, 0.01) : +((no.noise - 0.5) * noise_amount) : hbargraph("input", 0.0, 1.0);

reject_noise(slack, move_time, x) = return with {
  loop(prev_out, prev_timer, x) = loop_return with {
    trig = abs(prev_out - x) > slack;
    timer = ba.if(trig, 0, prev_timer + 1);
    out = ba.if(trig | timer < ma.SR * move_time, x, prev_out);
    loop_return = out,timer;
  };
  return = x : loop ~ (_,_);
};

process = noisy_knob : reject_noise(0.1, 1.0) : hbargraph("output", 0.0, 1.0),hbargraph("time", 0.0, 1000.0);
`;

const dspDefinition: DspDefinition = {
  id: "noise-rejection",
  name: "Noise rejection",
  description: "Rejects noise from hslider reads",
  dsp,
  type: "live",
};

export default dspDefinition;
