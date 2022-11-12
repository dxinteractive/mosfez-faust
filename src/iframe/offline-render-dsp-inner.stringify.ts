import { compile } from "../faust";

export async function offlineRenderDspInner(
  offlineCtx: OfflineAudioContext,
  source: AudioBufferSourceNode | undefined,
  props: {
    dsp: string;
  }
) {
  const node = await compile(offlineCtx, props.dsp);
  source?.connect(node);
  node.connect(offlineCtx.destination);
}
