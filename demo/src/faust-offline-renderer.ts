import { useEffect, useState, useRef } from "react";
import type { DspDefinition, DspDefinitionOffline } from "./types";

import Faust from "mosfez-faust/faust";
import { arrayToFloat32Array } from "mosfez-faust/convert";

const faust = new Faust();

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
    dsp,
    input = [],
    output = ["process"],
    expect,
  } = dspDefinition;

  const inputFloat32 = input.map((arr) => new Float32Array(arr));
  const outputLengthFromInput = input[0]?.length ?? 0;

  const result = await Promise.all(
    output.map(async (name) => {
      let dspTrimmed = dsp;
      if (name !== "process") {
        const lines = dsp.split("\n");
        const foundIndex = lines.findIndex((line) =>
          line.startsWith(`${name} `)
        );
        dspTrimmed = [
          ...lines.slice(0, foundIndex + 1),
          `process = ${name};`,
        ].join("\n");
      }

      const output = await faust.renderOffline(
        dspTrimmed,
        sampleRate,
        outputLength ?? outputLengthFromInput,
        inputFloat32
      );

      const expected = expect ? arrayToFloat32Array(expect[name]) : undefined;

      let passed = true;
      if (expect) {
        passed = JSON.stringify(output) === JSON.stringify(expected);
      }

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
