import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./dev.module.css";

import { useFaustLivePlayer } from "./faust-live-player";
import { useFaustOfflineRenderer } from "./faust-offline-renderer";
import { all } from "./dsp-definitions/all";
import { Controls } from "./controls";
import { OscopePanel } from "./live-visualisations";
import { PlotPanel } from "./offline-visualisations";
import { useWindowSize } from "./use-window-size";

import {
  HashRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
} from "react-router-dom";
import { DspDefinition } from "./types";

import { touchStart } from "mosfez-faust/touch-start";
const liveAudioContext = new window.AudioContext();
touchStart(liveAudioContext);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<List />} />
          <Route path=":id" element={<DspRoute />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

function Main() {
  return (
    <div className={classes.main}>
      <Outlet />
    </div>
  );
}

function List() {
  return (
    <>
      <ListHeader>
        Faust sketches -{" "}
        <a
          className={classes.link}
          href="https://github.com/dxinteractive/mosfez-faust"
        >
          github repo
        </a>
      </ListHeader>
      <ol className={classes.list}>
        {all.map((dsp) => {
          return (
            <li className={classes.listItem} key={dsp.id}>
              <Link to={`/${dsp.id}`}>{dsp.name}</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}

type ListHeaderProps = {
  children: React.ReactNode;
};

function ListHeader(props: ListHeaderProps) {
  return (
    <header className={classes.dspHeader}>
      <div className={classes.dspHeaderTitle}>{props.children}</div>
    </header>
  );
}

function DspRoute() {
  const { id } = useParams();
  const dspDefinition = all.find((dspDefinition) => dspDefinition.id === id);

  if (!dspDefinition) {
    return <DspHeader>Dsp "{id}" not found</DspHeader>;
  }

  return <Dsp dspDefinition={dspDefinition} />;
}

const TYPE_DESCS = {
  offline: "open your browser console to see DSP output",
  live: "DSP will play sound once successfully compiled",
};

type DspProps = {
  dspDefinition: DspDefinition;
};

function Dsp(props: DspProps) {
  const { dspDefinition } = props;
  const { name, description, dsp } = dspDefinition;

  const liveResult = useFaustLivePlayer(liveAudioContext, dspDefinition);
  const offlineResult = useFaustOfflineRenderer(dspDefinition);
  const { width } = useWindowSize();

  return (
    <>
      <DspHeader>
        <strong>{name}</strong> - {description}
      </DspHeader>
      <div className={classes.dspType}>
        type: {dspDefinition.type} - {TYPE_DESCS[dspDefinition.type]}
      </div>
      {liveResult && liveResult.params.length > 0 && (
        <div className={classes.dspContent}>
          <Controls items={liveResult.ui} node={liveResult.node} />
        </div>
      )}
      {liveResult && liveResult.audioContext && (
        <div className={classes.dspContent}>
          {liveResult.source && (
            <OscopePanel
              label="in"
              source={liveResult.source}
              audioContext={liveResult.audioContext}
            />
          )}
          {liveResult.node && (
            <OscopePanel
              label="out"
              source={liveResult.node}
              audioContext={liveResult.audioContext}
            />
          )}
        </div>
      )}
      {offlineResult && (
        <div className={classes.dspContent}>
          <PlotPanel
            name={name}
            offlineResult={offlineResult}
            width={width - 20}
            height={200}
            zoom={10}
            liveAudioContext={liveAudioContext}
          />
        </div>
      )}
      <div className={classes.dspContent}>
        <pre className={classes.dspPre}>{dsp}</pre>
      </div>
    </>
  );
}

type DspHeaderProps = {
  children: React.ReactNode;
};

function DspHeader(props: DspHeaderProps) {
  return (
    <header className={classes.dspHeader}>
      <div className={classes.dspHeaderTitle}>{props.children}</div>
      <div className={classes.dspHeaderBack}>
        <Link to="/">back</Link>
      </div>
    </header>
  );
}
