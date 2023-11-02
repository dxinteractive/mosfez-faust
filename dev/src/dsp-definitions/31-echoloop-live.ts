import type { DspDefinition } from "../types";

// L -> send -> sum ---> L
//               ^
//            delay(main)
// R ------------+---- delay(offset) -> R

// foo[OWL:A], bar[OWL:B]

const dsp = `
import("stdfaust.lib");

//
// param layers
//

changed(x) = x != x';

sAndHWithDefault(default, trig, x) = return with {
  isFirstTick = ba.time == 0;
  sample = select2(isFirstTick, x, default);
  return = ba.sAndH(isFirstTick | trig, sample);
};

layerIsAwake(l,x,t) = return with {
  layerChange = l : changed;
  startPos = x : ba.sAndH(layerChange);
  nudged = abs(x - startPos) > t;
  return = layerChange,nudged : ba.on_and_off : _ == 0;
};

layerValue(d,l,i,t,x) = return with {
  return = x : sAndHWithDefault(d, (l == i) & layerIsAwake(l,x,t));
};

//
// bitcrusher
//

bitcrusher(nbits,x) = return with {
  // floor(x) = x : int;
  scaler = float(2^nbits - 1);
  return = floor(x * scaler) / scaler;
};

//
// params
//

dry_volume_param = hslider("dry", 1.0, 0.0, 1.0, 0.01);
wet_volume_param = hslider("wet", 0.5, 0.0, 1.0, 0.01);

button_alt = checkbox("alt[OWL:B1]");
button_snapshot = button("snapshot[OWL:B2]");

time_param = hslider("time[OWL:A]", 500.0, 0.0, 1000.0, 0.1);
feedback_param = hslider("feedback[OWL:B]", 0.5, 0.0, 1.0, 0.01);

//
// param layers
//

delay_left_time = time_param : layerValue(500.0, button_alt, 0, 10.0) * 0.001 * ma.SR;
delay_right_time = time_param : layerValue(250.0, button_alt, 1, 10.0) * 0.001 * ma.SR;

delay_left = de.delay(ma.SR, delay_left_time);
delay_right = de.delay(ma.SR, delay_right_time);

feedback_amount = feedback_param : layerValue(0.5, button_alt, 0, 0.05);
bitcrush_amount = feedback_param : layerValue(1.0, button_alt, 1, 0.05);

//
// dsp
//

feedback_path(x) = (x * feedback_amount) : delay_left : bitcrusher(bitcrush_amount * 16.0);
dsp(l, r) = (l + (r : feedback_path)), (r : delay_right);

//
// simulated feedback loop
//

feedback_loop = _;

//
// routing
//

loop(dsp, fb, l) = (l, fb : dsp), fb;
lr(l, r) = r, l;
alchemist(dsp, x) = x : loop(dsp) ~ feedback_loop : !,_,_ : lr;

dry(x) = x * dry_volume_param;
wet(x) = x * wet_volume_param;

echoloop(dsp, l, r) = out
with {
  w = l : alchemist(dsp) : wet,wet;
  d = l,r : dry,dry;
  out = w,d :> _,_;
};

input = _ <: _,_;
process = input : echoloop(dsp) : _,_;
`;

const dspDefinition: DspDefinition = {
  id: "echoloop-live",
  name: "Echo loop pedal sim live",
  description:
    "Echoloop echo pedal DSP, and also its analog connections as DSP for localdev",
  dsp,
  type: "live",
};

export default dspDefinition;
