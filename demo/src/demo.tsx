// import React, { useEffect, useState, useCallback } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo.module.css";

import FaustThing, { unlockAudioContext, renderOffline } from "mosfez-faust/v0";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

const audioCtx = new window.AudioContext();
unlockAudioContext(audioCtx);

const faust = new FaustThing(audioCtx);

const DSP_1 = `
import("stdfaust.lib");

tune1 = waveform{69,-1,73,-1,71,73,71,0};
tune2 = waveform{73,-1,76,-1,74,76,74,0};
tune3 = waveform{45,-1,0,0,40,-1,0,0};

tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,1.0)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};

vibrato = +(os.osc(10.0) * 0.2);

synth(gate) = vibrato : ba.midikey2hz : os.osc : *(gate) : *(0.1);


voice1 = tunePlayer(tune1) : synth;
voice2 = tunePlayer(tune2) : synth;
voice3 = tunePlayer(tune3) : synth;

process = voice1 + voice2 + voice3 <: _,_;
`;

const DSP_2 = `
import("stdfaust.lib");

tune1 = waveform{74,-1,78,-1,71,78,71,0};
tune2 = waveform{78,-1,81,-1,79,81,79,0};
tune3 = waveform{50,-1,0,0,45,-1,0,0};

tunePlayer(tune) = tuneGate,tuneFreq
with {
    tuneNow = tune,int(os.phasor(8,1.0)) : rdtable;
    tuneGate = tuneNow > 0 : ba.sAndH(tuneNow != 0);
    tuneFreq = tuneNow : ba.sAndH(tuneNow > 0);
};

vibrato = +(os.osc(10.0) * 0.2);

synth(gate) = vibrato : ba.midikey2hz : os.osc : *(gate) : *(0.1);


voice1 = tunePlayer(tune1) : synth;
voice2 = tunePlayer(tune2) : synth;
voice3 = tunePlayer(tune3) : synth;

process = voice1 + voice2 + voice3 <: _,_;
`;

const DSP_SAWS = `
import("stdfaust.lib");
process = os.sawtooth(1000.0), os.sawtooth(200.0);
`;

renderOffline(DSP_SAWS, 44100, 10).then(console.log);

const DSP_3 = `
import("stdfaust.lib");
process = os.sawtooth(1000.0), os.sawtooth(200.0.0);
`;

function Demo() {
  return (
    <div className={classes.demo}>
      <div onClick={() => faust.render(DSP_1)}>one!</div>
      ...
      <div onClick={() => faust.render(DSP_2)}>two!</div>
      ...
      <div onClick={() => faust.render(DSP_3)}>three!</div>
    </div>
  );
}
