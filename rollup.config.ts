import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const entrypoints = ["all", "v0"];

export default entrypoints.flatMap((name) => {
  const common = {
    input: `src/${name}.ts`,
    external: (id) => !/^[./]/.test(id),
  };

  return [
    {
      plugins: [esbuild()],
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
