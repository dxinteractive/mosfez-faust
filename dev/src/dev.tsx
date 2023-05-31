import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./dev.module.css";

import { useFaustLivePlayer } from "./faust-live-player";
import { useFaustOfflineRenderer } from "./faust-offline-renderer";
import { useDspCallback } from "./dsp-callback";
import { useDspComponent } from "./dsp-component";
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

const liveAudioContext = new AudioContext();
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
      <div className={classes.footer}>
        <FooterLink href="https://faustdoc.grame.fr/manual/syntax/">
          Faust syntax
        </FooterLink>
        <FooterLink href="https://faustlibraries.grame.fr/">
          Faust libraries
        </FooterLink>
        <FooterLink href="https://faustide.grame.fr/">Faust IDE</FooterLink>
        <FooterLink href="https://www.rebeltech.org/patch-library/patches/my-patches/">
          OWL patches
        </FooterLink>
        <FooterLink href="https://www.openwarelab.org/Tools/firmware.html">
          OWL Firmware
        </FooterLink>
      </div>
    </div>
  );
}

type FooterLinkProps = {
  children: React.ReactNode;
  href: string;
};

function FooterLink(props: FooterLinkProps) {
  return <a className={classes.link} target="_blank" {...props} />;
}

function List() {
  return (
    <>
      <ListHeader>
        Faust and WebAudio API sketches -{" "}
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
  offline: "see charts below, open your browser console to see DSP values",
  live: "DSP will play sound once successfully compiled",
  component: "follow instructions below",
  callback: "JavaScript will be executed immediately, charts may appear below",
};

type DspProps = {
  dspDefinition: DspDefinition;
};

function Dsp(props: DspProps) {
  const { dspDefinition } = props;
  const { name, description } = dspDefinition;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const dsp = dspDefinition.dsp;

  const liveResult = useFaustLivePlayer(liveAudioContext, dspDefinition);
  const offlineResult = useFaustOfflineRenderer(dspDefinition);
  const dspResult = useDspCallback(dspDefinition, liveAudioContext);
  const dspComponentResult = useDspComponent(dspDefinition, liveAudioContext);
  const offlineResultToPlot = offlineResult ?? dspResult;
  const { width } = useWindowSize();

  let desc = TYPE_DESCS[dspDefinition.type];
  if (desc) {
    desc = ` - ${desc}`;
  }

  return (
    <>
      <DspHeader>
        <strong>{name}</strong> - {description}
      </DspHeader>
      <div className={classes.dspType}>
        type: {dspDefinition.type}
        {desc}
      </div>
      {offlineResult &&
        offlineResult.length > 0 &&
        offlineResult[0].params.length > 0 && (
          <div className={classes.dspContent}>
            <Controls
              items={offlineResult[0].ui}
              node={offlineResult[0].node}
            />
          </div>
        )}
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
      {offlineResultToPlot && offlineResultToPlot.length > 0 && (
        <div className={classes.dspContent}>
          <PlotPanel
            name={name}
            offlineResult={offlineResultToPlot}
            width={width - 36}
            height={200}
            liveAudioContext={liveAudioContext}
          />
        </div>
      )}
      {dspComponentResult && (
        <div className={classes.dspContent}>{dspComponentResult}</div>
      )}
      <div className={classes.dspContent}>
        {dsp && <pre className={classes.dspPre}>{dsp}</pre>}
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
