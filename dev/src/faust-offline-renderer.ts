import { useEffect, useState, useRef } from "react";
import type { DspDefinition, DspDefinitionOffline } from "./types";

import { compile } from "mosfez-faust/faust";
import {
  arrayToFloat32Array,
  arrayToAudioBuffer,
  audioBufferToFloat32Array,
} from "mosfez-faust/convert";

export type Output = {
  name: string;
  output: Float32Array[];
  expected?: Float32Array[];
  passed: boolean;
};

const cache = new Map<DspDefinitionOffline, Output[]>();

export async function faustOfflineRender(
  dspDefinition: DspDefinitionOffline
): Promise<Output[]> {
  const resultFromCache = cache.get(dspDefinition);
  if (resultFromCache) return resultFromCache;

  const {
    outputLength,
    sampleRate,
    channels,
    dsp,
    input = [],
    output = ["process"],
    expect,
  } = dspDefinition;

  const outputLengthFromInput = input[0]?.length ?? 0;

  const result = await Promise.all(
    output.map(async (name) => {
      let dspToCompile = dsp;
      if (name !== "process") {
        const lines = dsp.split("\n");
        const foundIndex = lines.findIndex((line) =>
          line.startsWith(`${name} `)
        );
        dspToCompile = [
          ...lines.slice(0, foundIndex + 1),
          `process = ${name};`,
        ].join("\n");
      }

      const offlineContext = new OfflineAudioContext(
        channels,
        outputLength ?? outputLengthFromInput,
        sampleRate
      );

      const node = await compile(offlineContext, dspToCompile);

      if (input.length === 0) {
        node.connect(offlineContext.destination);
      } else {
        const source: AudioBufferSourceNode =
          offlineContext.createBufferSource();
        source.buffer = arrayToAudioBuffer(offlineContext, input);
        source.connect(node);
        node.connect(offlineContext.destination);
        source.start();
      }

      const renderedBuffer = await offlineContext.startRendering();
      const output = audioBufferToFloat32Array(renderedBuffer);

      const expected = expect ? arrayToFloat32Array(expect[name]) : undefined;

      let passed = true;
      if (expect) {
        passed = JSON.stringify(output) === JSON.stringify(expected);
      }

      node.destroy();

      return {
        name,
        output,
        expected,
        passed,
      };
    }, Promise.resolve({}))
  );

  cache.set(dspDefinition, result);
  return result;
}

function logChannels(
  arr: Float32Array[] | number[][],
  log: (msg: unknown) => void
) {
  arr.forEach((channel) => log(Array.from(channel)));
}

export function useFaustOfflineRenderer(
  dspDefinition: DspDefinition
): Output[] | undefined {
  const [output, setOutput] = useState<Output[] | undefined>(undefined);
  const isStartedRef = useRef(false);

  useEffect(() => {
    if (isStartedRef.current || dspDefinition.type !== "offline") return;
    isStartedRef.current = true;

    console.log("input:");
    logChannels(dspDefinition.input ?? [], console.log);

    faustOfflineRender(dspDefinition).then((output) => {
      output.forEach((item) => {
        console.log(`${item.name}:`);
        logChannels(item.output, console.log);

        if (item.expected && !item.passed) {
          console.warn("incorrect output - expected:");
          logChannels(item.expected, console.warn);
        }
      });

      setOutput(output);
    });
  }, [dspDefinition]);

  return output;
}
