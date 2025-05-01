const offset = 0;
const pitch = 0;

const waveArray = new Float32Array([0, 1]);

export function playBuffer(
  buffer: AudioBuffer,
  audioContext: AudioContext | OfflineAudioContext
) {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.detune.value = pitch;

  const gain = audioContext.createGain();
  gain.gain.setValueCurveAtTime(waveArray, audioContext.currentTime, 1);

  source.connect(gain);
  gain.connect(audioContext.destination);

  source.addEventListener("ended", () => {
    source.disconnect(audioContext.destination);
  });
  source.start(undefined, offset);
}
