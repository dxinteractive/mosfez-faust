import { toArrayBuffer, toAudioBuffer } from "../convert";

type OfflineRenderInnerParams = {
  channels: number;
  sampleRate: number;
  length: number;
  inputArrayBuffer?: ArrayBuffer;
  props?: Record<string, unknown>;
};

export function offlineRenderInner(
  callback: (
    offlineCtx: OfflineAudioContext,
    source?: AudioBufferSourceNode,
    props?: Record<string, unknown>
  ) => Promise<unknown>
) {
  return async (params: OfflineRenderInnerParams) => {
    const { channels, length, sampleRate, inputArrayBuffer, props } = params;

    const offlineContext = new OfflineAudioContext(
      channels,
      length,
      sampleRate
    );

    let source: AudioBufferSourceNode | undefined;
    if (inputArrayBuffer) {
      source = offlineContext.createBufferSource();
      source.buffer = await toAudioBuffer(inputArrayBuffer, sampleRate);
    }

    if (typeof callback !== "function") {
      throw new Error(`functionString must set exports.buildContext`);
    }

    await callback(offlineContext, source, props);

    source?.start();
    const audioBuffer = await offlineContext.startRendering();
    const arrayBuffer = await toArrayBuffer(audioBuffer, sampleRate);
    return [arrayBuffer, [arrayBuffer]];
  };
}
