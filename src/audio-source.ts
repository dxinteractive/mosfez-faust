export async function audioSource(
  audioContext: AudioContext
): Promise<MediaStreamAudioSourceNode> {
  const device = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });

  return audioContext.createMediaStreamSource(device);
}
