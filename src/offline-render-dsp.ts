// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import offlineRenderDspInnerStringified from "../dist/iframe/offline-render-dsp-inner.stringify.js";
import { offlineRender, OfflineRenderParams } from "./offline-render";

export type OfflineRenderDspParams = Omit<
  OfflineRenderParams,
  "functionString"
> & {
  dsp: string;
};

export async function offlineRenderDsp(params: OfflineRenderDspParams) {
  const { dsp, ...rest } = params;
  return offlineRender({
    functionString: `
      ${offlineRenderDspInnerStringified}
      exports.buildContext = exports.offlineRenderDspInner;
    `,
    props: {
      dsp,
    },
    ...rest,
  });
}
