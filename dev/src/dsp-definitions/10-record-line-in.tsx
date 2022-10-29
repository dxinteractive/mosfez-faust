import type { DspDefinition } from "../types";
import { audioSource } from "mosfez-faust/audio-source";

async function callback(audioContext: AudioContext) {
  const source = await audioSource(audioContext);
  source.connect(audioContext.destination);
  return () => {
    source.disconnect(audioContext.destination);
  };
}

const dspDefinition: DspDefinition = {
  id: "record-line-in",
  name: "Record line-in",
  description: "Records a line-in signal into a buffer and plays it back.",
  type: "callback",
  callback,
};

export default dspDefinition;
