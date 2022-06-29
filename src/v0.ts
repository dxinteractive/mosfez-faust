import FaustModule from "@grame/libfaust/libfaust-wasm";
import { Faust } from "./faust-library";

const notes = new Array(44100)
  .fill("")
  .map(() => Math.round(Math.random() * 100))
  .join(",");

const code = `
import("stdfaust.lib");

tune1 = waveform{69,-1,73,-1,71,73,71,0};
tune2 = waveform{73,-1,76,-1,74,76,74,0};
tune3 = waveform{${notes}};

tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,1.0)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};

vibrato = +(os.osc(10.0) * 0.2);

synth(gate) = vibrato : ba.midikey2hz : os.osc : *(gate) : *(0.1);


voice1 = tunePlayer(tune1) : synth;
voice2 = tunePlayer(tune2) : synth;
voice3 = tunePlayer(tune3) : synth;

process = voice1 + voice2 + voice3 <: _,_;
`;

const unlockAudioContext = (audioCtx: AudioContext) => {
  if (audioCtx.state !== "suspended") return;
  const b = document.body;
  const events = ["touchstart", "touchend", "mousedown", "keydown"];
  const unlock = () => audioCtx.resume().then(clean);
  const clean = () => events.forEach((e) => b.removeEventListener(e, unlock));
  events.forEach((e) => b.addEventListener(e, unlock, false));
};

export default class FaustThing {
  async init() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    unlockAudioContext(audioCtx);

    const module = await FaustModule();
    const compiler = Faust.createCompiler(Faust.createLibFaust(module));
    console.log("Faust compiler version " + compiler.version());
    const factory = Faust.createMonoFactory();
    const start = Date.now();
    const node = await factory.compileNode(
      audioCtx,
      "Faust",
      compiler,
      code,
      "-ftz 2",
      false,
      128
    );
    const end = Date.now();
    console.log("compilation time", end - start, "ms");
    node.connect(audioCtx.destination);
    node.start();
  }
}
