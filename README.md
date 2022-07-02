# mosfez-faust

Makes dynamic compilation of [Faust](https://faust.grame.fr/) on the web a little easier, and has a dev project to run values through dsp offline, and preview dsp live. It's an opinionated version of some parts of [Faust for webaudio](https://github.com/grame-cncm/faust/tree/master-dev/architecture/webaudio), mostly just the Web Assembly Faust compiler, wrapped up in a library that'll have full typescript compatibility, ESM exports and no external file dependencies.

**[See the development project deployed!](https://dxinteractive.github.io/mosfez-faust/)** (even though it's intended to be used locally)

_It's early days so it's probably not finished and probably doesn't work or have fixed API or anything._

**Note:** "opinionated" means this library has a much narrower set of concerns than the original Faust webaudio API it's using. This is mainly just for compilation on the web, playback using `AudioWorket` nodes, no in-built-polyphonic compilation, some compilation options are set and inaccessible via this API.

This is half done. Things to do later:

- not require `<script>` tags to be added to load faust compiler resources.
- not require libfaust-wasm files to be placed manually in your deployed project's directory.

These are significant barriers to entry for easy adoption and installation via `npm` or `yarn`, so I'll be bundling all these resources up together so installation is as simple as `yarn add mosfez-faust` and usage is as simple as `import Faust from "mosfez-faust/faust";`.

More things to do later:

- compilation doesn't wait for faust to be ready, so you can sometimes beat it and it won't work
- faust js files pollute the console with messages
- faust js files are larger than the feature set I need, so I'll remove the unused. Then ruin all those savings by bundling wasm in js via base64 encoding
- make faust js throw relevant errors rather than return `null`
- try to get helpful messages returned when DSP contains syntax errors

## The mosfez-faust library

Description coming when the API design is nearing completion.

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
