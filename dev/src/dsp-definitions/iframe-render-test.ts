import type { DspDefinition } from "../types";
import { runInIframe } from "mosfez-faust/run-in-iframe";

async function callback() {
  console.log("go");
  const result = await runInIframe({
    functionString: `
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });

    async function run(params) {
      return params.foo;
    }

    exports.run = run;
  `,
    params: { foo: "12345!" },
  });
  console.log("result", result);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {};
}

const dspDefinition: DspDefinition = {
  id: "iframe-render-test",
  name: "iframe render test",
  description: "Try to render data in an iframe",
  type: "callback",
  callback,
};

export default dspDefinition;
