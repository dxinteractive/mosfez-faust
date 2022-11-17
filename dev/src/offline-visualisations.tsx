import React, { useEffect, useMemo, useRef, useState } from "react";
import classes from "./offline-visualisations.module.css";
import { downloadWav, toAudioBuffer } from "mosfez-faust/convert";
import { playBuffer } from "mosfez-faust/play";
import normalizeWheel from "normalize-wheel";

// pan, zoom, highlight
type PlotStateUpdater = (
  params: [number, number, number]
) => [number, number, number];

const setHighlight = (amount: number): PlotStateUpdater => {
  return ([p, z]) => [p, z, amount];
};

export type Output = {
  name: string;
  output: Float32Array[];
};

type PlotPanelProps = {
  name: string;
  offlineResult: Output[];
  width: number;
  height: number;
  liveAudioContext: AudioContext;
};

export function PlotPanel(props: PlotPanelProps) {
  const { name, offlineResult, width, height, liveAudioContext } = props;

  const [[pan, zoomWidth, highlight], setPlotState] = useState([0, 8, -1]);

  return (
    <>
      {offlineResult.map((output, i) => {
        let highlightValue = <span />;
        if (highlight !== -1) {
          highlightValue = (
            <span className={classes.plotHighlightMeta}>
              [{highlight}]: {output.output[0][highlight]}
            </span>
          );
        }

        const handlePlay = async (e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          playBuffer(
            await toAudioBuffer(output.output, liveAudioContext),
            liveAudioContext
          );
        };

        const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          const nameCleaned = name.replace(/ /g, "-").toLowerCase();
          const filename = `${nameCleaned}-${output.name}`;
          downloadWav(output.output, liveAudioContext, filename);
        };

        return (
          <div className={classes.plot} key={i}>
            <div className={classes.plotHeader}>
              <div className={classes.plotHeaderLeft}>
                {output.name} {highlightValue}
              </div>
              <div className={classes.plotHeaderRight}>
                <a
                  href="#"
                  className={classes.plotHeaderLink}
                  onClick={handlePlay}
                >
                  play
                </a>
              </div>
              <div className={classes.plotHeaderRight}>
                <a
                  href="#"
                  className={classes.plotHeaderLink}
                  onClick={handleDownload}
                >
                  download
                </a>
              </div>
            </div>
            <Plot
              output={output}
              width={width}
              height={height}
              pan={pan}
              zoomWidth={zoomWidth}
              highlight={highlight}
              setPlotState={setPlotState}
            />
          </div>
        );
      })}
      <span className={classes.plotHighlightMeta}>
        range {Math.round(pan)} - {Math.round(pan + width / zoomWidth)}
      </span>
    </>
  );
}

function getZoomHeight(channels: Float32Array[]): number {
  let min = 0;
  let max = 0;
  for (let i = 0; i < channels.length; i++) {
    for (let j = 0; j < channels[i].length; j++) {
      const value = channels[i][j];
      if (value < min) {
        min = value;
      }
      if (value > max) {
        max = value;
      }
    }
  }
  return 1 / Math.max(Math.abs(min), Math.abs(max));
}

type PlotProps = {
  output: Output;
  width: number;
  height: number;
  pan: number;
  zoomWidth: number;
  highlight: number;
  setPlotState: (updater: PlotStateUpdater) => void;
};

export function Plot(props: PlotProps) {
  const { output, width, height, pan, zoomWidth, highlight, setPlotState } =
    props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startDragPointerX = useRef<number | undefined>(undefined);
  const startDragPan = useRef<number | undefined>(undefined);

  const handlePointerOut = () => {
    setPlotState(setHighlight(-1));
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const offsetLeft = canvasRef.current?.offsetLeft ?? 0;
    const worldSpaceX = (e.clientX - offsetLeft) / zoomWidth;
    const index = worldSpaceX + pan;
    setPlotState(setHighlight(Math.floor(index)));

    if (
      startDragPointerX.current !== undefined &&
      startDragPan.current !== undefined
    ) {
      const np =
        startDragPan.current - (worldSpaceX - startDragPointerX.current);
      setPlotState(([, z, h]) => [np, z, h]);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const offsetLeft = canvasRef.current?.offsetLeft ?? 0;
    startDragPointerX.current = (e.clientX - offsetLeft) / zoomWidth;
    startDragPan.current = pan;
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    const { pixelY } = normalizeWheel(e);
    const dir = pixelY < 0 ? 2 : 0.5;
    setPlotState(([p, z, h]) => {
      const offsetLeft = canvasRef.current?.offsetLeft ?? 0;
      const pointerX = (e.clientX - offsetLeft) / zoomWidth;
      const np = p + pointerX - (1 / dir) * pointerX;
      return [np, z * dir, h];
    });
  };

  useEffect(() => {
    const handlePointerUp = () => {
      startDragPointerX.current = undefined;
      startDragPan.current = undefined;
    };
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [zoomWidth]);

  const zoomHeight = useMemo(
    () => getZoomHeight(output.output),
    [output.output]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const drawContext = canvas?.getContext("2d");

    if (drawContext) {
      drawContext.clearRect(0, 0, width, height);
      const max = Math.min(width, output.output[0].length) / zoomWidth;
      for (let x = 0; x < max; x++) {
        const index = x + Math.floor(pan);
        const xvalue = output.output[0][index];
        const y = xvalue * zoomHeight * height * -0.48 + height * 0.5;
        const px = Math.floor(x * zoomWidth);
        const pw = Math.ceil(zoomWidth);

        drawContext.fillStyle = "white";
        if (highlight === index) {
          drawContext.fillStyle = "rgb(34, 206, 206)";
          drawContext.fillRect(px, 0, pw, height);
          drawContext.fillStyle = "black";
        }
        drawContext.fillRect(px, Math.round(y), pw, 1);
      }
    }
  }, [output, width, height, highlight, pan, zoomWidth, zoomHeight]);

  return (
    <canvas
      width={width}
      height={height}
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      onWheel={handleWheel}
    />
  );
}
