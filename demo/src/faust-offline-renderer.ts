import { useEffect, useState, useRef } from "react";
import type { DspDefinition } from "./types";

import Faust from "mosfez-faust/faust";
import { arrayToFloat32Array } from "mosfez-faust/convert";

const faust = new Faust();

export type Output = {
  name: string;
  output: Float32Array[];
  expected?: Float32Array[];
  passed: boolean;
};

const cache = new Map<DspDefinition, Output[]>();

export async function faustOfflineRender(
  dspDefinition: DspDefinition
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

export function useFaustOfflineRenderer(
  dspDefinition: DspDefinition
): Output[] | undefined {
  const [output, setOutput] = useState<Output[] | undefined>(undefined);
  const isStartedRef = useRef(false);

  useEffect(() => {
    if (isStartedRef.current) return;
    isStartedRef.current = true;
    console.log("input:");
    (dspDefinition.input ?? []).forEach((channel) => {
      console.log(Array.from(channel));
    });
    faustOfflineRender(dspDefinition).then((output) => {
      output.forEach((item) => {
        console.log(`${item.name}:`);

        item.output.forEach((channel) => {
          console.log(Array.from(channel));
        });

        if (item.expected && !item.passed) {
          console.warn("incorrect output - expected:");
          item.expected.forEach((channel) => {
            console.warn(Array.from(channel));
          });
        }
      });

      setOutput(output);
    });
  }, [dspDefinition]);

  return output;
}
