import type { DspDefinition } from "../types";
import { offlineRenderDsp } from "mosfez-faust/offline-render-dsp";

async function callback() {
  console.log("go");

  const params = {
    channels: 2,
    sampleRate: 48000,
    input: [
      [1, 2, 3, 0, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 0, 5, 6, 7, 8, 9, 10],
    ],
    dsp: `import("stdfaust.lib");
    process = *(0.5),*(2);`,
  };
  for (let i = 0; i < 3; i++) {
    console.log("result", await offlineRenderDsp(params));
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {};
}

const dspDefinition: DspDefinition = {
  id: "offline-render-dsp-test",
  name: "Offline render DSP test",
  description: "Try to render Faust DSP offline",
  type: "callback",
  callback,
};

export default dspDefinition;
