import { FaustModule, Faust } from "./faust/faust";
import type { MonoFactory, Compiler } from "./faust/faust";

export const unlockAudioContext = (audioCtx: AudioContext) => {
  if (audioCtx.state !== "suspended") return;
  const b = document.body;
  const events = ["touchstart", "touchend", "mousedown", "keydown"];
  const clean: () => void = () =>
    events.forEach((e) => b.removeEventListener(e, unlock));
  const unlock = () => audioCtx.resume().then(clean);
  events.forEach((e) => b.addEventListener(e, unlock, false));
};

export default class FaustThing {
  audioCtx: AudioContext;
  factory?: MonoFactory;
  compiler?: Compiler;

  constructor(audioCtx: AudioContext) {
    this.audioCtx = audioCtx;
    this.init();
  }

  async init() {
    const module = await FaustModule();
    this.compiler = Faust.createCompiler(Faust.createLibFaust(module));
    this.factory = Faust.createMonoFactory();
  }

  async render(dsp: string) {
    const { factory, compiler } = this;
    if (!factory || !compiler) return;

    const start = Date.now();
    const node = await factory.compileNode(
      this.audioCtx,
      "Faust",
      compiler,
      dsp,
      "-ftz 2",
      false,
      128
    );
    const end = Date.now();
    console.log("compilation time", end - start, "ms");

    if (!node) throw new Error("couldnt create dsp node");

    node.connect(this.audioCtx.destination);
    node.start();
  }
}

export async function renderOffline(
  dsp: string,
  sampleRate: number,
  bufferSize: number
) {
  const module = await FaustModule();
  const compiler = Faust.createCompiler(Faust.createLibFaust(module));
  const factory = await compiler.createMonoDSPFactory(
    "Faust",
    dsp,
    "-I libraries"
  );

  if (!factory) throw new Error("couldnt create factory");

  const offline = await Faust.createMonoFactory().createOfflineProcessor(
    factory,
    sampleRate,
    bufferSize
  );

  if (!offline) throw new Error("couldnt create offline processor");

  return offline.plot(bufferSize);
}
