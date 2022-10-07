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

async function sendResult(result: unknown) {
  window.parent.postMessage(result, window.location.origin); // TODO transferrable
}

export async function runInIframeInner(
  callback: (params: unknown) => Promise<unknown>
) {
  const params = await receiveParams();
  const result = await callback(params);
  sendResult(result);
}
