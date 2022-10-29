import type { DspDefinition } from "../types";

const dsp = `
import("stdfaust.lib");
N = 3;
scan = ba.selectn(N, ba.period(N));

find_by_index(op, n, x) = compute ~ (_,_,_,_) : (!,!,!,_)
  with {
    compute(acc, index, count, val) =
      ba.if(count<n, ba.if(op(acc,x), acc, x), x), // new acc
      ba.if(count<n, ba.if(op(acc,x), index, count), 0), // new index
      ba.if(count<n, count+1, 1), // new count
      ba.if(count<n, val, index); // new val
  };

process = scan : find_by_index(>, N);
`;

const dspDefinition: DspDefinition = {
  id: "block-max",
  name: "Block max",
  description:
    "Finds the max value from a set of N parallel channels per N ticks",
  dsp,
  type: "offline",
  sampleRate: 44100,
  channels: 1,
  input: [
    [4, 1, 2, 9, 1, 2, 0, 0, 0, 1, 2, 1, 10, 10, 10],
    [3, 4, 5, 3, 4, 3, 0, 1, 0, 3, 4, 4, 11, 11, 11],
    [0, 0, 0, 3, 4, 3, 0, 0, 0, 0, 4, 5, 10, 10, 10],
  ],
  output: ["scan", "process"],
  outputLength: 18,
  expect: {
    scan: [[4, 4, 0, 9, 4, 3, 0, 1, 0, 1, 4, 5, 10, 11, 10, 0, 0, 0]],
    process: [[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1]],
  },
};

export default dspDefinition;
