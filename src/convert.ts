import audioBufferToWav from "audiobuffer-to-wav";

export { audioBufferToWav };

export function arrayToAudioBuffer(
  ctx: AudioContext | OfflineAudioContext,
  channels: Float32Array[] | number[][]
): AudioBuffer {
  const buffer = ctx.createBuffer(
    channels.length,
    channels[0].length,
    ctx.sampleRate
  );
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const nowBuffering = buffer.getChannelData(channel);
    for (let i = 0; i < buffer.length; i++) {
      nowBuffering[i] = channels[channel][i];
    }
  }
  return buffer;
}

export function audioBufferToFloat32Array(
  audioBuffer: AudioBuffer
): Float32Array[] {
  const channels: Float32Array[] = [];
  for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
    channels.push(audioBuffer.getChannelData(i));
  }
  return channels;
}

export function arrayToFloat32Array(arr: number[][]): Float32Array[] {
  return arr.map((arr) => new Float32Array(arr));
}

export function float32ArrayToArray(arr: Float32Array[]): number[][] {
  return arr.map((arr) => Array.from(arr));
}

export function audioBufferToArray(audioBuffer: AudioBuffer): number[][] {
  return float32ArrayToArray(audioBufferToFloat32Array(audioBuffer));
}

export function wavToBlob(wav: ArrayBuffer): Blob {
  return new Blob([new DataView(wav)], { type: "audio/wav" });
}
