import type { DspDefinition } from "../types";
import { runInIframe } from "mosfez-faust/run-in-iframe";

async function callback() {
  console.log("go");
  const result = await runInIframe({
    functionString: `
    exports.run = async function run(params) {
      const audioArray = [[params.foo,1,2,3,4,5,6,7,8,9,10]];
      return [{audioArray}];
    };
  `,
    params: { foo: 9 },
  });
  console.log("result", result);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {};
}

const dspDefinition: DspDefinition = {
  id: "iframe-render-test",
  name: "Iframe render test",
  description: "Try to render data in an iframe",
  type: "callback",
  callback,
};

export default dspDefinition;
