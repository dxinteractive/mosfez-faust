export class VoiceAllocator {
  private _totalVoices = 0;

  // voices are either free, active, or released
  // new items are always pushed, so the oldest item in an array is always at index 0

  // voice number / id / timeoutId
  private _freeVoices: number[] = [];
  private _activeVoices: [number, string][] = [];
  private _releasedVoices: [number, string, NodeJS.Timeout][] = [];

  constructor(totalVoices: number) {
    this.totalVoices = totalVoices;
  }

  get totalVoices(): number {
    return this._totalVoices;
  }

  set totalVoices(total: number) {
    this._totalVoices = total;
    this._freeVoices = [];
    this._activeVoices = [];
    this._releasedVoices = [];
    for (let i = 0; i < total; i++) {
      this._freeVoices.push(i);
    }
  }

  get freeVoices(): number[] {
    return this._freeVoices;
  }

  get activeVoices(): [number, string][] {
    return this._activeVoices;
  }

  get releasedVoices(): [number, string, NodeJS.Timeout][] {
    return this._releasedVoices;
  }

  activate(id: string): number {
    // if voice is already active, do nothing and return voice number
    const ownVoice = this._activeVoices.find((v) => v[1] === id);
    if (ownVoice) {
      const [voice] = ownVoice;
      return voice;
    }

    // else, if a voice is free, make it active and return voice number
    const freeVoice = this._freeVoices.shift();
    if (freeVoice !== undefined) {
      this._activeVoices.push([freeVoice, id]);
      return freeVoice;
    }

    // else, if a voice is released, reuse it and return voice number
    const oldestReleased = this._releasedVoices.shift();
    if (oldestReleased !== undefined) {
      const [voice, , timeoutId] = oldestReleased;
      clearTimeout(timeoutId);
      this._activeVoices.push([voice, id]);
      return voice;
    }

    // else, reuse the oldest active voice and return voice number
    const oldestActive = this._activeVoices.shift();
    if (oldestActive !== undefined) {
      const [voice] = oldestActive;
      this._activeVoices.push([voice, id]);
      return voice;
    }

    throw new Error(`Could not find active voice to reuse`);
  }

  release(id: string, ms: number): number {
    // move a voice from active to released if it exists
    // and start a timer until it is freed
    const voiceIndex = this._activeVoices.findIndex((v) => v[1] === id);
    if (voiceIndex === -1) return -1;
    const voice = this._activeVoices[voiceIndex];
    this._activeVoices.splice(voiceIndex, 1);
    const timeoutId = setTimeout(() => this.free(id), ms);
    this._releasedVoices.push([...voice, timeoutId]);
    return voice[0];
  }

  private free(id: string) {
    console.log("free voice", id);
    // move a voice from released to free
    const voiceIndex = this._releasedVoices.findIndex((v) => v[1] === id);
    if (voiceIndex === -1) return;
    const [voice] = this._releasedVoices[voiceIndex];
    this._releasedVoices.splice(voiceIndex, 1);
    this._freeVoices.push(voice);
  }
}
