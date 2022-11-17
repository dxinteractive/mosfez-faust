export function playBuffer(
  buffer: AudioBuffer,
  audioContext: AudioContext | OfflineAudioContext
) {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.addEventListener("ended", () => {
    source.disconnect(audioContext.destination);
  });
  source.start();
}
