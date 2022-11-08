// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { audioBufferToWav } from "./audiobuffer-to-wav/audiobuffer-to-wav";

export type AudioArray = number[][];
export type Float32AudioArray = Float32Array[];
export type AudioData = AudioArray | Float32Array[] | AudioBuffer | ArrayBuffer;

//
// type guards
//

function isObjectType(type: string, value: unknown): boolean {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

export function isAudioArray(value: unknown): value is AudioArray {
  return Array.isArray(value) && value.length > 0 && Array.isArray(value[0]);
}

export function isFloat32AudioArray(
  value: unknown
): value is Float32AudioArray {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    isObjectType("Float32Array", value[0])
  );
}

export function isAudioBuffer(value: unknown): value is AudioBuffer {
  return isObjectType("AudioBuffer", value);
}

export function isArrayBuffer(value: unknown): value is ArrayBuffer {
  return isObjectType("ArrayBuffer", value);
}

//
// 1:1 conversion functions
//

function audioArrayToAudioBuffer(
  channels: Float32AudioArray | AudioArray,
  audioCtx: AudioContext | OfflineAudioContext
): AudioBuffer {
  const buffer = audioCtx.createBuffer(
    channels.length,
    channels[0].length,
    audioCtx.sampleRate
  );
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const nowBuffering = buffer.getChannelData(channel);
    for (let i = 0; i < buffer.length; i++) {
      nowBuffering[i] = channels[channel][i];
    }
  }
  return buffer;
}

function audioBufferToFloat32AudioArray(
  audioBuffer: AudioBuffer
): Float32AudioArray {
  const channels: Float32AudioArray = [];
  for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
    channels.push(audioBuffer.getChannelData(i));
  }
  return channels;
}

function arrayToFloat32AudioArray(arr: AudioArray): Float32AudioArray {
  return arr.map((arr) => new Float32Array(arr));
}

function float32ArrayToAudioArray(
  arr: Float32AudioArray | AudioArray
): AudioArray {
  return arr.map((arr) => Array.from(arr));
}

async function arrayBufferToAudioBuffer(
  arrayBuffer: ArrayBuffer,
  audioCtx: AudioContext | OfflineAudioContext
): Promise<AudioBuffer> {
  return await new Promise((resolve) =>
    audioCtx.decodeAudioData(arrayBuffer, resolve)
  );
}

function arrayBufferToWavBlob(buffer: ArrayBuffer): Blob {
  return new Blob([new DataView(buffer)], { type: "audio/wav" });
}

//
// target based conversion functions
//

export function toAudioArray(
  input: AudioArray | Float32AudioArray | AudioBuffer
): AudioArray {
  if (isAudioBuffer(input)) {
    input = audioBufferToFloat32AudioArray(input);
  }
  if (isFloat32AudioArray(input)) {
    return float32ArrayToAudioArray(input);
  }
  if (isAudioArray(input)) {
    return input;
  }
  throw new Error(`toArray: unconvertible input type: ${input}`);
}

export function toFloat32AudioArray(
  input: AudioArray | Float32AudioArray | AudioBuffer
): Float32AudioArray {
  if (isFloat32AudioArray(input)) {
    return input;
  }
  if (isAudioArray(input)) {
    return arrayToFloat32AudioArray(input);
  }
  if (isAudioBuffer(input)) {
    return audioBufferToFloat32AudioArray(input);
  }
  throw new Error(`toFloat32AudioArray: unconvertible input type: ${input}`);
}

export async function toAudioBuffer(
  input: AudioData,
  audioCtx: AudioContext | OfflineAudioContext = new AudioContext()
): Promise<AudioBuffer> {
  if (isAudioBuffer(input)) {
    return input;
  }
  if (isArrayBuffer(input)) {
    return arrayBufferToAudioBuffer(input, audioCtx);
  }
  if (isAudioArray(input) || isFloat32AudioArray(input)) {
    return audioArrayToAudioBuffer(input, audioCtx);
  }
  throw new Error(`toAudioBuffer: unconvertible input type: ${input}`);
}

export async function toArrayBuffer(
  input: AudioData,
  audioCtx: AudioContext | OfflineAudioContext = new AudioContext()
): Promise<ArrayBuffer> {
  if (isArrayBuffer(input)) {
    return input;
  }
  const buffer = await toAudioBuffer(input, audioCtx);
  return audioBufferToWav(buffer, { float32: true });
}

export async function toWavBlob(input: AudioData): Promise<Blob> {
  const buffer = await toArrayBuffer(input);
  return arrayBufferToWavBlob(buffer);
}

//
// utils
//

export async function downloadWav(input: AudioData, name: string) {
  const blob = await toWavBlob(input);
  downloadBlob(blob, `${name}.wav`);
}

export function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  document.body.appendChild(anchor);
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
