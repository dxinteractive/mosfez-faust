import type { DspDefinition } from "../types";
import { playBuffer } from "mosfez-faust/play";
import { toAudioBuffer } from "mosfez-faust/convert";

let registered = false;

async function callback(liveAudioContext: AudioContext) {
  const response = await fetch("/audio/tonejs-instruments/harp/B5.wav");
  if (!response.ok) {
    throw new Error(`Could not load sound file`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await toAudioBuffer(arrayBuffer, liveAudioContext);

  async function playStuff() {
    console.log("play stuff");
    for (let i = 0; i < 64; i++) {
      playBuffer(audioBuffer, liveAudioContext);
      await new Promise((r) => setTimeout(r, 20));
    }
  }

  if (!registered) {
    registered = true;
    document.addEventListener("click", playStuff);
    console.log("ready");
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {
    // console.log("cleaning up");
    // document.removeEventListener("click", playStuff);
  };
}

const dspDefinition: DspDefinition = {
  id: "play-buffer",
  name: "Play buffer",
  description: "Tests the playBuffer utility",
  type: "callback",
  callback,
};

export default dspDefinition;
