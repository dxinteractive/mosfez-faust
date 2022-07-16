import { useEffect, useRef } from "react";
import { useAnimationFrame } from "./utils/use-animation-frame";
import classes from "./live-visualisations.module.css";

type OscopePanelProps = {
  source: AudioNode;
  audioContext: AudioContext;
  spectro?: boolean;
  label?: string;
};

export function OscopePanel(props: OscopePanelProps) {
  const { source, audioContext, spectro, label } = props;
  const { channelCount } = source;

  const scopes: React.ReactElement[] = [];
  for (let i = 0; i < channelCount; i++) {
    scopes.push(
      <Oscope
        key={i}
        source={source}
        audioContext={audioContext}
        spectro={spectro}
        width={200}
        height={100}
      />
    );
  }

  return (
    <div className={classes.oscopePanel}>
      <div>{label}</div>
      {scopes}
    </div>
  );
}

type OscopeProps = {
  source: AudioNode;
  audioContext: AudioContext;
  width: number;
  height: number;
  spectro?: boolean;
};

export function Oscope(props: OscopeProps) {
  const { source, audioContext, width, height, spectro } = props;

  const analyzerRef = useRef<AnalyserNode>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const analyzerNode = new AnalyserNode(audioContext);
    source.connect(analyzerNode);
    analyzerRef.current = analyzerNode;

    return () => {
      try {
        source.disconnect(analyzerNode);
      } catch (e) {
        // nope
      }
    };
  }, [source, audioContext]);

  useAnimationFrame(() => {
    const canvas = canvasRef.current;
    const drawContext = canvas?.getContext("2d");
    const analyzer = analyzerRef.current;

    if (drawContext && analyzer) {
      let data = new Uint8Array(0);
      if (spectro) {
        data = new Uint8Array(analyzer.frequencyBinCount);
        analyzer.getByteFrequencyData(data);
      } else {
        analyzer.fftSize = 8192;
        data = new Uint8Array(analyzer.fftSize);
        analyzer.getByteTimeDomainData(data);
      }
      const barWidth = width / data.length;
      const spectroMaxValue = Math.log2(data.length);
      drawContext.clearRect(0, 0, width, height);
      for (let i = 0; i < data.length; i++) {
        const value = data[i];
        const percent = value / 256;
        const h = height * percent;
        const offset = height - h - 1;
        const x = spectro
          ? (Math.log(i) / spectroMaxValue) * width
          : i * barWidth;
        drawContext.fillStyle = "white";
        drawContext.fillRect(x, offset, 1, 1);
      }
    }
  }, [source, width, height, spectro]);

  return (
    <canvas
      className={classes.oscope}
      width={width}
      height={height}
      ref={canvasRef}
    />
  );
}
