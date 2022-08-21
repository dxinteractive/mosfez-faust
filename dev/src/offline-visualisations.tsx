import React, { useEffect, useRef, useState } from "react";
import classes from "./offline-visualisations.module.css";
import { downloadWav, arrayToAudioBuffer } from "mosfez-faust/convert";

export type Output = {
  name: string;
  output: Float32Array[];
};

type PlotPanelProps = {
  name: string;
  offlineResult: Output[];
  width: number;
  height: number;
  zoom: number;
  liveAudioContext: AudioContext;
};

export function PlotPanel(props: PlotPanelProps) {
  const { name, offlineResult, width, height, zoom, liveAudioContext } = props;

  const [highlight, setHighlight] = useState(-1);

  return (
    <>
      {offlineResult.map((output, i) => {
        let highlightValue = <span />;
        if (highlight !== -1) {
          highlightValue = <span>: {output.output[0][highlight]}</span>;
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
