import type { DspDefinition } from "../types";

// increment_when(trig, x) = return
// with {
//   new(prev) = ba.if(x == 0, 0, prev + 1);
//   loop(prev) = ba.if(trig, new(prev), prev);
//   return = loop ~ _;
// };

// is_next_cycle_close(cycle) = is_close_range(cycle' / cycle);

const dsp = `
import("stdfaust.lib");

crossed_up(x) = (x' < 0) & (x >= 0);
safe_divide(num, denom) = num / max(denom, 1) - num * (denom == 0);

lowest_pitch = 0.25;
longest_cycle = ma.SR / lowest_pitch;
reject_sub_pitches(x) = ba.if(x > longest_cycle, 0, x);

close_range = 0.5;
close_range_up = pow(2, close_range);
close_range_down = pow(2, -close_range);
is_close_range(delta) = (delta > close_range_down) & (delta < close_range_up);

reject_skipped_cycles(crossed, cycle) = return
with {
  delta = cycle' / cycle;
  close = is_close_range(delta);
  close2 = is_close_range(delta * 2);
  should_halve = close2 : ba.sAndH(crossed);
  return = ba.if(should_halve, cycle / 2, cycle);
};

pitch(x) = hz,osc
with {
  crossed = crossed_up(x);
  cycle = ba.countup(ma.SR, crossed')
    : ba.sAndH(crossed)
    : reject_sub_pitches;
    // : reject_skipped_cycles(crossed);
  
  hz = safe_divide(ma.SR, cycle);
  osc = os.osc(hz) * 0.2;
};

track_pitch = return
with {
  clamp_hz(hz) = ba.if(hz < lowest_pitch, 440.0, hz);
  return = (fi.lowpass(2) <: pitch,_) ~ max(100.0);
  // TODO make hz go less drastically high or else it'll catch on the harmonics
};

input_prep = fi.dcblockerat(lowest_pitch) : ef.gate_mono(-20.0, 0.0001, 1.0, 0.0001);
// TODO - on gate open, set lpf medium

input = _ <: _,_,_;
pitch_over_time = _ : input_prep : track_pitch;
osc_over_time = pitch_over_time : _,!,! : os.osc * 0.1;
`;

const dspDefinition: DspDefinition = {
  id: "pitch-tracker",
  name: "Pitchtracker",
  description: "Finds pitch",
  dsp,
  type: "offline",
  output: ["input", "pitch_over_time", "osc_over_time"],
  // inputFile: "/audio/cycfi-q-pitch-test/Hammer-Pull High E.wav",
  // inputOffset: 23800,
  inputFile: "/audio/cycfi-q-pitch-test/Tapping D.wav",
  inputOffset: 30400,
  outputLength: 88200,
  sampleRate: 48000,
  channels: 1,
};

export default dspDefinition;
