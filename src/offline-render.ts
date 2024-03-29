// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import offlineRenderInnerStringified from "../dist/iframe/offline-render-inner.stringify.js";

import {
  AudioArray,
  Float32AudioArray,
  toArrayBuffer,
  toAudioBuffer,
  toFloat32AudioArray,
} from "./convert";
import { runInIframe } from "./run-in-iframe";

export type OfflineRenderParams = {
  functionString?: string;
  channels: number;
  sampleRate: number;
  length?: number;
  input?: AudioArray | Float32AudioArray | AudioBuffer;
  props?: Record<string, unknown>;
};

export async function offlineRender(
  params: OfflineRenderParams
): Promise<Float32AudioArray> {
  const { functionString = "", channels, sampleRate, input, props } = params;
  let { length } = params;

  let inputArrayBuffer: ArrayBuffer | undefined;
  let transferrables: ArrayBuffer[] = [];

  if (input) {
    inputArrayBuffer = await toArrayBuffer(input, sampleRate);
    transferrables = [inputArrayBuffer];
    if (length === undefined) {
      length = toFloat32AudioArray(input)[0]?.length ?? 0;
    }
  }

  const result = await runInIframe({
    functionString: `
      ${offlineRenderInnerStringified}
      ${functionString}
      exports.run = exports.offlineRenderInner(exports.buildContext);
    `,
    params: {
      channels,
      sampleRate,
      inputArrayBuffer,
      length: length ?? 0,
      props,
    },
    transferrables,
  });

  const audioBuffer = await toAudioBuffer(result as ArrayBuffer, sampleRate);
  return toFloat32AudioArray(audioBuffer);
}
