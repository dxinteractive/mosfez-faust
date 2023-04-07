# mosfez-faust

[![npm](https://img.shields.io/npm/v/mosfez-faust.svg)](https://www.npmjs.com/package/mosfez-faust) ![Master build](https://github.com/dxinteractive/mosfez-faust/workflows/CI/badge.svg?branch=main)

Makes dynamic compilation of [Faust](https://faust.grame.fr/) on the web a little easier, and has a dev project to run values through dsp offline, and preview dsp live. It's an opinionated version of some parts of [Faust for webaudio](https://github.com/grame-cncm/faust/tree/master-dev/architecture/webaudio), mostly just the Web Assembly Faust compiler, wrapped up in a library that has:

- full typescript compatibility
- ESM exports, so no need to add `<script>` tags
- have any async functions chain seamlessly off any prior initialisation steps, so if a required resource is not yet ready, the API function simply waits until it is ready
- error reporting is more idiomatic for JavaScript - error objects are thrown containing details of the problem when compilation does not work

[See the dev project](https://dxinteractive.github.io/mosfez-faust/) - but keep in mind it's intended to be used locally.

**Note:** "opinionated" means this library has a much narrower set of concerns than the original Faust webaudio API it's using. This is mainly just for compilation on the web, playback using `AudioWorket` nodes, no in-built-polyphonic compilation. Some compilation options may be inaccessible via this API.

## Installation

`npm install mosfez-faust` or `yarn add mosfez-faust`

Then you'll need to copy the files from `node_modules/mosfez-faust/public` and put it in your projects public-facing root directory that will be accessible once deployed. e.g. if you are using Vite, put them in your Vite project's `public` directory. This library will make a request for `libfaust-wasm.wasm` and `libfaust-wasm.data` when it starts up, and will not work if those files can't be found.

## Usage

```js
import { compile } from "mosfez-faust/faust";
import { touchStart } from "mosfez-faust/touch-start";

const audioContext = new window.AudioContext();
touchStart(audioContext);

async function startSines() {
  const dsp = `
    import("stdfaust.lib");
    process = os.osc(440.0),os.osc(441.0);
  `;

  const node = await compile(audioContext, dsp);
  node.connect(audioContext.destination);
}
```

Or to separately create a factory and worklet nodes:

```js
import { compileFactory } from "mosfez-faust/faust";
import { touchStart } from "mosfez-faust/touch-start";

const audioContext = new window.AudioContext();
touchStart(audioContext);

async function startSines() {
  const dsp = `
    import("stdfaust.lib");
    process = os.osc(440.0),os.osc(441.0);
  `;

  const factory = await compileFactory(dsp);
  const node = await factory.createNode(audioContext);
  node.connect(audioContext.destination);
}
```

Also some general purpose web audio conversion utilities can be found at:

```js
import { * as conversions } from "mosfez-faust/convert";
```

See source code for details.

## The dev project

The `/dev` directory contains a dev project that uses Vite and allows Faust DSP development in an IDE, while hot realoading and displaying and playing the results of your DSP changes. After cloning the repo, run `yarn prep` then `cd dev`, then `yarn dev` to use the project.

DSP definitions can be added and browsed to. There are two types, `offline` and `live`.

- Offline DSP is compiled on page load or file save, and values specified in the dsp definition are passed through the faust DSP and logged to the console. This makes for a very deliberate DSP development experience, where you can even define your expected output and console messages will indicate if your DSP produces the correct result.
- Live DSP is compiled on page load or file save, and is immediately started and connected to an audiocontext in the browser so you can hear the result live.

## Developing this library

This library is written in [typescript](https://www.typescriptlang.org/), using modified code from [Faust's repo](https://github.com/grame-cncm/faust) and wrapping that in a typical typescript library "wrapper". It's bundled with `rollup`, formatted with `prettier`, linted with `eslint` and tested with `jest`.

You will need `node@16` or greater and `yarn@1` installed globally. Clone the repo and run `yarn prep` to install deps and build. Then you can run:

- `yarn build` to build the `*.ts` source files into `*.js` files and `*.d.ts` type files in `/dist`.
- `yarn test` to run tests using `jest` (none yet).
- `yarn pretty` to run the auto-formatter `prettier`.
- `yarn lint` to run the linter `eslint`.
- `cd dev && yarn dev` to run the dev project
