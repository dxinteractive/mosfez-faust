// import { FaustModule, Faust as FaustLibrary } from "./faust/faust-with-types";
import type {
  MonoFactory,
  Compiler,
  FaustMonoNode,
} from "./faust/faust-with-types";
export type { MonoFactory, Compiler, FaustMonoNode };

export type ReadyResult = {
  factory: MonoFactory;
  compiler: Compiler;
};

export default class Faust {
  // ready: Promise<ReadyResult>;

  constructor() {
    // this.ready = FaustModule().then((module) => {
    //   const compiler = FaustLibrary.createCompiler(
    //     FaustLibrary.createLibFaust(module)
    //   );
    //   const factory = FaustLibrary.createMonoFactory();
    //   return {
    //     compiler,
    //     factory,
    //   };
    // });
  }

  async compileNode(
    audioContext: AudioContext | OfflineAudioContext,
    dsp: string
  ): Promise<FaustMonoNode> {
    // const { compiler, factory } = await this.ready;

    // // const start = Date.now();

    // const node = await factory.compileNode(
    //   audioContext,
    //   "Faust",
    //   compiler,
    //   dsp,
    //   "-ftz 2",
    //   false,
    //   128
    // );

    // // const end = Date.now();
    // // console.log("compilation time", end - start, "ms");

    // if (!node) throw new Error("couldnt create dsp node");
    // return node;

    const argv = ["-ftz", "2", "-I", "http://127.0.0.1:8000/../../libraries/"];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { faust } = window;

    // Dynamically create the Faust generated node from explicit DSP source in 'dsp_code'
    const factory = await new Promise((resolve) =>
      faust.createDSPFactory(dsp, argv, resolve)
    );

    const node = await new Promise((resolve) =>
      faust.createDSPWorkletInstance(factory, audioContext, resolve)
    );

    // throw new Error("couldnt create dsp node");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return node;
  }

  async renderOffline(
    _dsp: string,
    _sampleRate: number,
    _bufferSize: number,
    _input?: Float32Array[]
  ): Promise<Float32Array[]> {
    // const { compiler } = await this.ready;
    // const factory = await compiler.createMonoDSPFactory(
    //   "Faust",
    //   dsp,
    //   "-I libraries"
    // );
    // if (!factory) throw new Error("couldnt create factory");
    // const offline =
    //   await FaustLibrary.createMonoFactory().createOfflineProcessor(
    //     factory,
    //     sampleRate,
    //     bufferSize,
    //     input
    //   );
    // if (!offline) throw new Error("couldnt create offline processor");
    // return offline.plot(bufferSize);

    return [];
  }
}
