export function touchStart(audioCtx: AudioContext) {
  if (audioCtx.state !== "suspended") return;
  const b = document.body;
  const events = ["touchstart", "touchend", "mousedown", "keydown"];
  const clean: () => void = () =>
    events.forEach((e) => b.removeEventListener(e, unlock));
  const unlock = () => audioCtx.resume().then(clean);
  events.forEach((e) => b.addEventListener(e, unlock, false));
}
