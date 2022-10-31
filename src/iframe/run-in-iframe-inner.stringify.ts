import { RunInIframeInnerResult } from "../run-in-iframe";

async function receiveParams() {
  return new Promise((resolve) => {
    const messageListener = (message: MessageEvent) => {
      if (
        message.source !== window.parent ||
        message.origin !== window.location.origin
      ) {
        return;
      }

      window.removeEventListener("message", messageListener);
      resolve(message.data);
    };

    window.addEventListener("message", messageListener);
  });
}

async function sendResult(result: unknown, transferrables: Transferable[]) {
  window.parent.postMessage(result, window.location.origin, transferrables);
}

export async function runInIframeInner(
  callback: (params: unknown) => Promise<RunInIframeInnerResult>
) {
  const params = await receiveParams();
  const [result, transferrables = []] = await callback(params);
  sendResult(result, transferrables);
}
