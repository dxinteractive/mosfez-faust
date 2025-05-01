import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

isFirstTick = ba.time == 0;
sAndHWithDefault(default, trig, x) = ba.sAndH(isFirstTick | trig, select2(isFirstTick, x, default));

changed(x) = x != x';

layerIsAwake(l,x,t) = return with {
  layerChange = l : changed;
  startPos = x : ba.sAndH(layerChange);
  nudged = abs(x - startPos) > t;
  return = layerChange,nudged : ba.on_and_off : _ == 0;
};

layerValue(l,i,t,x) = return with {
  return = x : sAndHWithDefault(0.5, (l == i) & layerIsAwake(l,x,t));
};

layer = hslider("layer", 0.0, 0.0, 2.0, 1.0);
knob = hslider("knob", 0.0, 0.0, 1.0, 0.001);

layerOutput(i) = layerValue(layer,i,0.1,knob): hbargraph("value %i", 0.0, 1.0);

process = par(i, 3, layerOutput(i));
`;

const dspDefinition: DspDefinition = {
  id: "param-layers",
  name: "Param layers",
  description:
    "Control multiples variables via a single slider and a layer selector",
  dsp,
  type: "live",
};

export default dspDefinition;
