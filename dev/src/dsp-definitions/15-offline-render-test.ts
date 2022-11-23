import type { DspDefinition, RenderResults } from "../types";
import { offlineRender } from "mosfez-faust/offline-render";

async function callback(
  _liveAudioContext: AudioContext,
  renderResults: RenderResults
) {
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

  const result = await offlineRender(params);

  console.log("result", result);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderResults([
    {
      name: "result",
      output: result,
    },
  ]);

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
