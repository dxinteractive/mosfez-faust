import { VoiceAllocator } from "./voice-allocator";

jest.useFakeTimers();

type VoiceCount = {
  free: number[];
  active: number[];
  released: number[];
};

function getVoiceCounts(allocator: VoiceAllocator): VoiceCount {
  return {
    free: allocator.freeVoices,
    active: allocator.activeVoices.map((a) => a[0]),
    released: allocator.releasedVoices.map((a) => a[0]),
  };
}

it("should allow total voices to be set", () => {
  const allocator = new VoiceAllocator(0);
  allocator.totalVoices = 6;
  expect(allocator.totalVoices).toBe(6);
  expect(getVoiceCounts(allocator)).toEqual({
    free: [0, 1, 2, 3, 4, 5],
    active: [],
    released: [],
  });
});

it("should allocate up to totalVoices number of voices sequentially", () => {
  const allocator = new VoiceAllocator(3);

  const output = [];
  output.push(allocator.activate("a"));
  output.push(allocator.activate("b"));
  output.push(allocator.activate("c"));

  expect(output).toEqual([0, 1, 2]);
  expect(getVoiceCounts(allocator)).toEqual({
    free: [],
    active: [0, 1, 2],
    released: [],
  });
});

it("should output same voice if same id is given multiple times", () => {
  const allocator = new VoiceAllocator(3);

  const output = [];
  output.push(allocator.activate("a"));
  output.push(allocator.activate("b"));
  output.push(allocator.activate("b"));
  output.push(allocator.activate("b"));

  expect(output).toEqual([0, 1, 1, 1]);
  expect(getVoiceCounts(allocator)).toEqual({
    free: [2],
    active: [0, 1],
    released: [],
  });
});

it("should allocate and release, release should free after ms", () => {
  const allocator = new VoiceAllocator(3);

  allocator.activate("a");
  allocator.activate("b");
  allocator.release("a", 100);
  allocator.release("b", 200);

  jest.advanceTimersByTime(50);

  expect(getVoiceCounts(allocator)).toEqual({
    free: [2],
    active: [],
    released: [0, 1],
  });

  jest.advanceTimersByTime(100);

  expect(getVoiceCounts(allocator)).toEqual({
    free: [2, 0],
    active: [],
    released: [1],
  });

  jest.advanceTimersByTime(100);

  expect(getVoiceCounts(allocator)).toEqual({
    free: [2, 0, 1],
    active: [],
    released: [],
  });
});

it("should allocate and release and NOT free if same id is reactivated before being made free", () => {
  const allocator = new VoiceAllocator(1);

  allocator.activate("a");
  allocator.release("a", 100);

  jest.advanceTimersByTime(50);

  allocator.activate("a");

  jest.advanceTimersByTime(100);

  expect(getVoiceCounts(allocator)).toEqual({
    free: [],
    active: [0],
    released: [],
  });
});

it("should allocate and release and NOT free if same id is reactivated and released before being made free", () => {
  const allocator = new VoiceAllocator(1);

  allocator.activate("a");
  allocator.release("a", 100);

  jest.advanceTimersByTime(50);

  allocator.activate("a");
  allocator.release("a", 1000);

  jest.advanceTimersByTime(100);

  expect(getVoiceCounts(allocator)).toEqual({
    free: [],
    active: [],
    released: [0],
  });
});

it("should allocate free voices sequentially even with releases", () => {
  const allocator = new VoiceAllocator(3);

  const output = [];
  output.push(allocator.activate("a"));
  output.push(allocator.activate("b"));
  allocator.release("b", 100);
  allocator.release("a", 100);
  output.push(allocator.activate("c"));

  expect(output).toEqual([0, 1, 2]);
  expect(getVoiceCounts(allocator)).toEqual({
    free: [],
    active: [2],
    released: [1, 0],
  });
});

it("should reuse oldest released notes before resorting to reusing active notes", () => {
  const allocator = new VoiceAllocator(3);

  const output = [];
  output.push(allocator.activate("a")); // take free voice 0
  output.push(allocator.activate("b")); // take free voice 1
  allocator.release("b", 100);
  allocator.release("a", 100);
  output.push(allocator.activate("c")); // take free voice 2
  output.push(allocator.activate("d")); // take released voice 1
  output.push(allocator.activate("e")); // take released voice 0
  output.push(allocator.activate("f")); // take active voice 2
  expect(output).toEqual([0, 1, 2, 1, 0, 2]);
});

it("should reuse the first pressed notes voice if too many voices allocated", () => {
  const allocator = new VoiceAllocator(3);

  const output = [];
  output.push(allocator.activate("a"));
  output.push(allocator.activate("b"));
  output.push(allocator.activate("c"));
  output.push(allocator.activate("d"));
  output.push(allocator.activate("e"));
  output.push(allocator.activate("f"));
  output.push(allocator.activate("g"));
  expect(output).toEqual([0, 1, 2, 0, 1, 2, 0]);
});

it("should cancel all allocated and released voices if total voices is changed", () => {
  const allocator = new VoiceAllocator(3);

  allocator.activate("a");
  allocator.activate("b");
  allocator.release("a", 100);

  expect(allocator.freeVoices.length).toBe(1);
  expect(allocator.activeVoices.length).toBe(1);
  expect(allocator.releasedVoices.length).toBe(1);

  allocator.totalVoices = 4;

  expect(allocator.freeVoices.length).toBe(4);
  expect(allocator.activeVoices.length).toBe(0);
  expect(allocator.releasedVoices.length).toBe(0);
});
