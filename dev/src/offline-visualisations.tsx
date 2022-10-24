import React, { useEffect, useMemo, useRef, useState } from "react";
import classes from "./offline-visualisations.module.css";
import { downloadWav, arrayToAudioBuffer } from "mosfez-faust/convert";

// pan, zoom, highlight
type PlotStateUpdater = (
  params: [number, number, number]
) => [number, number, number];

const PAN_SPEED = 64;

const doPan = (amount: number): PlotStateUpdater => {
  return ([p, z, h]) => {
    const np = Math.floor(p + Math.max(PAN_SPEED / z, 1) * amount);
    return [np, z, h];
  };
};

const doZoom = (amount: number): PlotStateUpdater => {
  return ([p, z, h]) => {
    // let np = p;
    // if (h !== -1) {
    // }
    // TODO
    return [p, z * amount, h];
  };
};

const setHighlight = (amount: number): PlotStateUpdater => {
  return ([p, z]) => [p, z, amount];
};

const PAN_ZOOM_UPDATERS: Record<string, PlotStateUpdater> = {
  ArrowLeft: doPan(-1),
  ArrowRight: doPan(1),
  ArrowUp: doZoom(0.5),
  ArrowDown: doZoom(2),
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const updater = PAN_ZOOM_UPDATERS[e.key];
      if (updater) {
        setPlotState(updater);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

        const handlePlay = (e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          const source = liveAudioContext.createBufferSource();
          source.buffer = arrayToAudioBuffer(liveAudioContext, output.output);
          source.connect(liveAudioContext.destination);
          source.start();
        };

        const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          const nameCleaned = name.replace(/ /g, "-").toLowerCase();
          const filename = `${nameCleaned}-${output.name}`;
          downloadWav(output.output, filename);
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
        range {pan} - {pan + Math.ceil(width / zoomWidth)}
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

  const handlePointerOut = () => {
    setPlotState(setHighlight(-1));
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const offsetLeft = canvasRef.current?.offsetLeft ?? 0;
    const index = Math.floor((e.clientX - offsetLeft) / zoomWidth) + pan;
    setPlotState(setHighlight(index));
  };

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
        const index = x + pan;
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
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
    />
  );
}
