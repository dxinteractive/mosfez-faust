import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { string } from "rollup-plugin-string";

const tsToJsEntrypoints = [
  "faust",
  "touch-start",
  "convert",
  "audio-source",
  "iframe/run-in-iframe-inner.stringify",
  "iframe/offline-render-inner.stringify",
  "iframe/offline-render-dsp-inner.stringify",
  "run-in-iframe",
  "offline-render",
  "offline-render-dsp",
];

export default tsToJsEntrypoints.flatMap((name) => {
  const common = {
    input: `src/${name}.ts`,
    external: (id) => !/^[./]/.test(id),
  };

  return [
    {
      plugins: [
        esbuild(),
        string({
          include: `**/*.stringify.js`,
        }),
      ],
      output: [
        {
          file: `dist/${name}.js`,
          format: "cjs",
          sourcemap: true,
        },
        {
          file: `dist/${name}.mjs`,
          format: "es",
          sourcemap: true,
        },
      ],
      ...common,
    },
    {
      plugins: [dts()],
      output: {
        file: `dist/${name}.d.ts`,
        format: "es",
      },
      ...common,
    },
  ];
});
