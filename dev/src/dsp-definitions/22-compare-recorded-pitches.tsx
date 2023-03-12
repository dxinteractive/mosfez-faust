import type { DspDefinition } from "../types";
import { playBuffer } from "mosfez-faust/play";
import { toAudioBuffer } from "mosfez-faust/convert";
import { fetchFile } from "../fetch";
import { useEffect, useRef, useState } from "react";

const clips: [number, string][] = [
  [0, "/audio/tonejs-instruments/guitar-acoustic/E2.mp3"],
  [5, "/audio/tonejs-instruments/guitar-acoustic/A2.mp3"],
  [6, "/audio/tonejs-instruments/guitar-acoustic/As2.mp3"],
  [12, "/audio/tonejs-instruments/guitar-acoustic/E3.mp3"],
  [12 + 5, "/audio/tonejs-instruments/guitar-acoustic/A3.mp3"],
  [12 + 6, "/audio/tonejs-instruments/guitar-acoustic/As3.mp3"],
  [24, "/audio/tonejs-instruments/guitar-acoustic/E4.mp3"],
  [24 + 5, "/audio/tonejs-instruments/guitar-acoustic/A4.mp3"],
  [24 + 6, "/audio/tonejs-instruments/guitar-acoustic/As4.mp3"],
];

async function fetchFileAsBuffer(
  name: string,
  liveAudioContext: AudioContext
): Promise<AudioBuffer> {
  const response = await fetchFile(name);
  if (!response.ok) {
    throw new Error(`Could not load sound file`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return await toAudioBuffer(arrayBuffer, liveAudioContext);
}

async function playSounds(
  liveAudioContext: AudioContext,
  loadedClips: [number, AudioBuffer][]
) {
  for (let i = 0; i < loadedClips.length; i++) {
    const source = liveAudioContext.createBufferSource();
    source.buffer = loadedClips[i][1];
    const rate = 2 ** -(loadedClips[i][0] / 12);
    source.playbackRate.value = rate;
    source.connect(liveAudioContext.destination);
    source.addEventListener("ended", () => {
      source.disconnect(liveAudioContext.destination);
    });
    source.start();
    await new Promise((r) => setTimeout(r, 2000));
  }
}

function component(liveAudioContext: AudioContext) {
  const loadedClips = useRef<[number, AudioBuffer][]>([]);
  useEffect(() => {
    (async () => {
      const loaded: [number, AudioBuffer][] = [];
      const buffers = await Promise.all(
        clips.map((c) => fetchFileAsBuffer(c[1], liveAudioContext))
      );
      for (let i = 0; i < clips.length; i++) {
        loaded.push([clips[i][0], buffers[i]]);
      }
      loadedClips.current = loaded;
    })();
  }, []);

  const handleClick = () => playSounds(liveAudioContext, loadedClips.current);
  return <div onClick={handleClick}>click to play at A2</div>;
}

const dspDefinition: DspDefinition = {
  id: "compare-recorded-pitches",
  name: "Compare recorded pitches",
  description:
    "Plays back a bunch of audio clips, pitched to match each other to examine timbral differences",
  type: "component",
  component,
};

export default dspDefinition;
