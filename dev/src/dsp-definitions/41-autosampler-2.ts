import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");

table_size = 999999;
start = 4000.0;
len = 581.0;
end = start + len;

raw = _;

// use trigger to start!

no_play = (ba.time > start) & (ba.time <= end);
rec_active = ba.time > start;
slide = (ba.time - start) / len * 0.1;
slide_floor = float(int(slide));
slide_remain = slide % 1.0;

rec_head = rec_active : ba.sweep(9999999.0);
play_head = ba.if(no_play, rec_head, no_play' == 0 : ba.sweep(end - start) + 1);
play_head_progress = play_head / len;

cross(a, b, f, x) = a(x) * (1.0 - f) + b(x) * f;

table(p) = rwtable(table_size, 0.0, int(rec_head), _, int(p));

microloop(r) = cross(table(play_head + len * (r + 1.0)), table(play_head + len * r), play_head_progress);

wet = cross(microloop(slide_floor),microloop(slide_floor + 1.0), slide_remain);
out = cross(_,wet,min(rec_head / 1000.0, 1.0));
`;

const dspDefinition: DspDefinition = {
  id: "autosampler-2",
  name: "Autosampler 2",
  description: "Grabbing a single cycle of audio and osc it",
  dsp,
  type: "offline",
  channels: 1,
  sampleRate: 48000,
  inputFile: "/audio/cycfi-q-pitch-test/1a-Low-E.wav",
  inputOffset: 47500 + 5000 + 30000,
  outputLength: 200000,
  output: ["raw", "out"],
};

export default dspDefinition;
