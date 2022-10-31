// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import runInIframeInnerStringified from "../dist/iframe/run-in-iframe-inner.stringify.js";

export type RunInIframeConfig = {
  functionString: string;
  params: unknown;
  transferrables?: Transferable[];
};

export type RunInIframeInnerResult = [unknown] | [unknown, Transferable[]];

export async function runInIframe(
  options: RunInIframeConfig
): Promise<unknown> {
  const { functionString, params, transferrables = [] } = options;
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.append(iframe);
  const { contentWindow } = iframe;

  if (!contentWindow) throw new Error(`contentWindow not available on iframe`);

  contentWindow.document.write(
    `<script>
      var exports = {};
      ${functionString}
      ${runInIframeInnerStringified}
      exports.runInIframeInner(exports.run);
    </script>`
  );

  return new Promise((resolve) => {
    const messageListener = (message: MessageEvent) => {
      if (message.source !== contentWindow) return;

      window.removeEventListener("message", messageListener);
      iframe.remove();
      resolve(message.data);
    };
    window.addEventListener("message", messageListener);

    contentWindow.postMessage(params, window.location.origin, transferrables);
  });
}
