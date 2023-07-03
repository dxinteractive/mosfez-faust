import type { DspDefinition } from "../types";

import sineWave from "./01-sine-wave";
import attenuator from "./02-attenuator";
import blockMax from "./03-block-max";
import liveTune from "./04-live-tune";
import syntaxError from "./05-syntax-error";
import pmSynth from "./06-pm-synth";
import paramLayers from "./07-param-layers";
import passthroughMono from "./08-passthrough-mono";
import passthroughStereo from "./09-passthrough-stereo";
import recordLineIn from "./10-record-line-in";
import iframeRenderTest from "./11-iframe-render-test";
import sampleInput from "./12-sample-input-offline";
import partialDetector from "./13-partial-detector";
import pitchDown from "./14-pitch-down";
import offlineRenderTest from "./15-offline-render-test";
import offlineRenderDspTest from "./16-offline-render-dsp-test";
import playBuffer from "./17-play-buffer";
import outputChannelTest from "./18-output-channel-test";
import chainBuffer from "./19-chain-buffer";
import pitchFlattening from "./20-pitch-flattening";
import pitchBending from "./21-pitch-bending";
import comparePitches from "./22-compare-recorded-pitches";
import zeroCrossingDetection from "./23-zero-crossing-detection";
import pitchtracker from "./24-pitchtracker";
import autocorrelation from "./25-autocorrelation";
import envelopeDetector from "./26-envelope-detector";
import echoloop from "./30-echoloop";
import echoloopLive from "./31-echoloop-live";

export const all: DspDefinition[] = [
  sineWave,
  attenuator,
  blockMax,
  liveTune,
  syntaxError,
  pmSynth,
  paramLayers,
  passthroughMono,
  passthroughStereo,
  recordLineIn,
  iframeRenderTest,
  sampleInput,
  partialDetector,
  pitchDown,
  offlineRenderTest,
  offlineRenderDspTest,
  playBuffer,
  outputChannelTest,
  chainBuffer,
  pitchFlattening,
  pitchBending,
  comparePitches,
  zeroCrossingDetection,
  pitchtracker,
  autocorrelation,
  envelopeDetector,
  echoloop,
  echoloopLive,
];
