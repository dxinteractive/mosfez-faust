import { useEffect, useState, useRef } from "react";
import { DspDefinition, DspDefinitionOffline, isDspOffline } from "./types";

import { FaustNode, UIItem, compile, isUItemGroup } from "mosfez-faust/faust";
import {
  toFloat32AudioArray,
  toAudioBuffer,
  toAudioArray,
} from "mosfez-faust/convert";
import { fetchFile } from "./fetch";
import { ControlNode } from "./controls";

function addToParamsObject(
  params: Record<string, number>,
  items: UIItem[],
  node: FaustNode
): Record<string, number> {
  items.forEach((item) => {
    if (isUItemGroup(item)) {
      addToParamsObject(params, item.items, node);
    } else {
      params[item.address] = node.getParamValue(item.address);
    }
  });
  return params;
}

function setParamsOnNode(
  params: Record<string, number>,
  items: UIItem[],
  node: FaustNode
): Record<string, number> {
  items.forEach((item) => {
    if (isUItemGroup(item)) {
      setParamsOnNode(params, item.items, node);
    } else {
      node.setParamValue(item.address, params[item.address]);
    }
  });
  return params;
}

function logChannels(
  arr: Float32Array[] | number[][],
  log: (msg: unknown) => void
) {
  arr.forEach((channel) => log(Array.from(channel)));
}

export type OfflineRenderOutput = {
  name: string;
  output: Float32Array[];
  expected?: Float32Array[];
  passed: boolean;
  params: string[];
  ui: UIItem[];
  initialParams: Record<string, number>;
};

export type Output = {
  name: string;
  output: Float32Array[];
  expected?: Float32Array[];
  passed: boolean;
  params: string[];
  ui: UIItem[];
  node: ControlNode;
};

const cache = new Map<DspDefinitionOffline, OfflineRenderOutput[]>();

async function faustOfflineRender(
  dspDefinition: DspDefinitionOffline,
  params: Record<string, number> | null
): Promise<OfflineRenderOutput[]> {
  // const resultFromCache = cache.get(dspDefinition);
  // if (resultFromCache) return resultFromCache;

  const {
    outputLength,
    sampleRate,
    channels,
    dsp,
    inputFile,
    output = ["process"],
    expect,
    inputOffset,
  } = dspDefinition;

  let { input = [] } = dspDefinition;

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

      const outputLengthFromInput = input[0]?.length ?? 0;

      const offlineContext = new OfflineAudioContext(
        channels,
        outputLength ?? outputLengthFromInput,
        sampleRate
      );

      if (inputFile) {
        const response = await fetchFile(inputFile);
        if (!response.ok) {
          throw new Error(`Could not load sound file "${inputFile}"`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await toAudioBuffer(arrayBuffer, offlineContext);

        input = toAudioArray(audioBuffer);
      }

      if (inputOffset) {
        input = input.map((i) => i.slice(inputOffset));
      }

      input = input.map((i) => i.slice(0, outputLength));

      console.log("input:");
      logChannels(input ?? [], console.log);

      const node = await compile(offlineContext, dspToCompile);
      const paramsFromNode = node.getParams();
      const { ui } = node;

      if (params) {
        setParamsOnNode(params, ui, node);
      }

      if (input.length === 0) {
        node.connect(offlineContext.destination);
      } else {
        const source: AudioBufferSourceNode =
          offlineContext.createBufferSource();
        source.buffer = await toAudioBuffer(input, offlineContext);
        source.connect(node);
        node.connect(offlineContext.destination);
        source.start();
      }

      const renderedBuffer = await offlineContext.startRendering();
      const output = toFloat32AudioArray(renderedBuffer);

      const expected = expect ? toFloat32AudioArray(expect[name]) : undefined;

      let passed = true;
      if (expect) {
        passed = JSON.stringify(output) === JSON.stringify(expected);
      }

      const initialParams = addToParamsObject({}, ui, node);

      node.destroy();

      return {
        name,
        output,
        expected,
        passed,
        params: paramsFromNode,
        ui,
        initialParams,
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
  const [params, setParams] = useState<Record<string, number> | null>(null);
  const isStartedRef = useRef(false);

  useEffect(() => {
    if (!isDspOffline(dspDefinition)) return;
    isStartedRef.current = true;

    faustOfflineRender(dspDefinition, params).then((output) => {
      output.forEach((item) => {
        console.log(`${item.name}:`);
        logChannels(item.output, console.log);

        if (item.expected && !item.passed) {
          console.warn("incorrect output - expected:");
          logChannels(item.expected, console.warn);
        }
      });

      const { initialParams } = output[0];
      if (!params && output.length > 0) {
        setParams(initialParams);
      }

      const node: ControlNode = {
        getParamValue: (path: string) =>
          params ? params[path] : initialParams[path],
        setParamValue: (path: string, value: number) => {
          setParams((params) => ({ ...params, [path]: value }));
        },
        getOutputValue: (path: string) =>
          params ? params[path] : initialParams[path],
      };

      setOutput(output.map((item) => ({ ...item, node })));
    });
  }, [dspDefinition, params]);

  return output;
}
