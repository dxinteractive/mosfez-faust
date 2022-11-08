import type { DspDefinition } from "../types";
import { offlineRender } from "mosfez-faust/offline-render";

async function callback() {
  console.log("go");

  const params = {
    channels: 2,
    sampleRate: 48000,
    length: 5,
    input: [
      [1, 0.5, 0, 3],
      [1, 0.5, 0, 3],
    ],
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
