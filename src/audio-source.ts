export async function audioSource(
  audioContext: AudioContext
): Promise<MediaStreamAudioSourceNode> {
  const device = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false
    },
  });

  return audioContext.createMediaStreamSource(device);
}
