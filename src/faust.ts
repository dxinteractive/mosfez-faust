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
    // const start = Date.now();

    const argv = ["-ftz", "2", "-I", "http://127.0.0.1:8000/../../libraries/"];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { faust } = window;

    const factory = await new Promise((resolve) =>
      faust.createDSPFactory(dsp, argv, resolve)
    );

    const node = await new Promise((resolve) =>
      faust.createDSPWorkletInstance(factory, audioContext, resolve)
    );

    // const end = Date.now();
    // console.log("compilation time", end - start, "ms");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return node;
  }
}
