import type { DspDefinition } from "../types";
import { offlineRender } from "mosfez-faust/offline-render";

async function callback() {
  console.log("go");

  const samples = [];
  for (let i = 0; i < 10; i++) {
    samples.push(0.2);
  }

  const params = {
    channels: 2,
    sampleRate: 48000,
    // length: 100,
    input: [samples, samples],
    functionString: `exports.buildContext = async function buildContext(offlineCtx, source) {
      source.connect(offlineCtx.destination);
    };`,
  };

  console.log("result", await offlineRender(params));

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {};
}

const dspDefinition: DspDefinition = {
  id: "offline-render-test",
  name: "Offline render test",
  description: "Try to render audio offline",
  type: "callback",
  callback,
};

export default dspDefinition;
