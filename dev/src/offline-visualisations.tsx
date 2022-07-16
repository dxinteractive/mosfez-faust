import { useEffect, useRef } from "react";
import classes from "./offline-visualisations.module.css";

export type Output = {
  name: string;
  output: Float32Array[];
};

type PlotPanelProps = {
  offlineResult: Output[];
  width: number;
  height: number;
  zoom: number;
};

export function PlotPanel(props: PlotPanelProps) {
  const { offlineResult, width, height, zoom } = props;

  return (
    <>
      {offlineResult.map((output, i) => (
        <div className={classes.plot} key={i}>
          <div>{output.name}</div>
          <Plot output={output} width={width} height={height} zoom={zoom} />
        </div>
      ))}
    </>
  );
}

type PlotProps = {
  output: Output;
  width: number;
  height: number;
  zoom: number;
};

export function Plot(props: PlotProps) {
  const { output, width, height, zoom } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const drawContext = canvas?.getContext("2d");

    if (drawContext) {
      drawContext.clearRect(0, 0, width, height);
      const max = Math.min(width, output.output[0].length);
      for (let x = 0; x < max; x++) {
        const y = output.output[0][x] * height * -0.48 + height * 0.5;
        drawContext.fillStyle = "white";
        drawContext.fillRect(Math.round(x) * zoom, Math.round(y), zoom, 1);
      }
    }
  }, [output, width, height]);

  return <canvas width={width} height={height} ref={canvasRef} />;
}
