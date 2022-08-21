import React, { useEffect, useRef, useState } from "react";
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

  const [highlight, setHighlight] = useState(-1);

  return (
    <>
      {offlineResult.map((output, i) => {
        let highlightValue = <span />;
        if (highlight !== -1) {
          highlightValue = <span>: {output.output[0][highlight]}</span>;
        }

        return (
          <div className={classes.plot} key={i}>
            <div>
              {output.name} {highlightValue}
            </div>
            <Plot
              output={output}
              width={width}
              height={height}
              zoom={zoom}
              highlight={highlight}
              setHighlight={setHighlight}
            />
          </div>
        );
      })}
    </>
  );
}

type PlotProps = {
  output: Output;
  width: number;
  height: number;
  zoom: number;
  highlight: number;
  setHighlight: (highlight: number) => void;
};

export function Plot(props: PlotProps) {
  const { output, width, height, zoom, highlight, setHighlight } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handlePointerOut = () => {
    setHighlight(-1);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const offsetLeft = canvasRef.current?.offsetLeft ?? 0;
    const pointerX = Math.floor((e.clientX - offsetLeft) / zoom);
    setHighlight(pointerX);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const drawContext = canvas?.getContext("2d");

    if (drawContext) {
      drawContext.clearRect(0, 0, width, height);
      const max = Math.min(width, output.output[0].length);
      for (let x = 0; x < max; x++) {
        const y = output.output[0][x] * height * -0.48 + height * 0.5;

        drawContext.fillStyle = "white";
        if (highlight === x) {
          drawContext.fillStyle = "rgb(34, 206, 206)";
          drawContext.fillRect(Math.round(x) * zoom, 0, zoom, height);
          drawContext.fillStyle = "black";
        }
        drawContext.fillRect(Math.round(x) * zoom, Math.round(y), zoom, 1);
      }
    }
  }, [output, width, height, highlight]);

  return (
    <canvas
      width={width}
      height={height}
      ref={canvasRef}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
    />
  );
}
