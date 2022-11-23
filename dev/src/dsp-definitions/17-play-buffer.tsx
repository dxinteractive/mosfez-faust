import type { DspDefinition } from "../types";
import { playBuffer } from "mosfez-faust/play";
import { toAudioBuffer } from "mosfez-faust/convert";
import { fetchFile } from "../fetch";

async function playSounds(liveAudioContext: AudioContext) {
  const response = await fetchFile("/audio/tonejs-instruments/harp/B5.wav");
  if (!response.ok) {
    throw new Error(`Could not load sound file`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await toAudioBuffer(arrayBuffer, liveAudioContext);

  console.log("play stuff");
  for (let i = 0; i < 16; i++) {
    playBuffer(audioBuffer, liveAudioContext);
    await new Promise((r) => setTimeout(r, 60));
  }
}

function component(liveAudioContext: AudioContext) {
  const handleClick = () => playSounds(liveAudioContext);
  return <div onClick={handleClick}>click here to hear loud things</div>;
}

const dspDefinition: DspDefinition = {
  id: "play-buffer",
  name: "Play buffer",
  description: "Tests the playBuffer utility",
  type: "component",
  component,
};

export default dspDefinition;
