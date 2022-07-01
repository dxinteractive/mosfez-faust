import { FaustModule, Faust as FaustLibrary } from "./faust/faust-with-types";
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
  ready: Promise<ReadyResult>;

  constructor() {
    this.ready = FaustModule().then((module) => {
      const compiler = FaustLibrary.createCompiler(
        FaustLibrary.createLibFaust(module)
      );
      const factory = FaustLibrary.createMonoFactory();
      return {
        compiler,
        factory,
      };
    });
  }

  async compileNode(
    audioContext: AudioContext | OfflineAudioContext,
    dsp: string
  ): Promise<FaustMonoNode> {
    const { compiler, factory } = await this.ready;

    // const start = Date.now();

    const node = await factory.compileNode(
      audioContext,
      "Faust",
      compiler,
      dsp,
      "-ftz 2",
      false,
      128
    );

    // const end = Date.now();
    // console.log("compilation time", end - start, "ms");

    if (!node) throw new Error("couldnt create dsp node");
    return node;
  }

  async renderOffline(
    dsp: string,
    sampleRate: number,
    bufferSize: number,
    input?: Float32Array[]
  ) {
    const { compiler } = await this.ready;
    const factory = await compiler.createMonoDSPFactory(
      "Faust",
      dsp,
      "-I libraries"
    );

    if (!factory) throw new Error("couldnt create factory");

    const offline =
      await FaustLibrary.createMonoFactory().createOfflineProcessor(
        factory,
        sampleRate,
        bufferSize,
        input
      );

    if (!offline) throw new Error("couldnt create offline processor");

    return offline.plot(bufferSize);
  }
}
