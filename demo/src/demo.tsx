import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo.module.css";

import { useFaustLivePlayer } from "./faust-live-player";
import { useFaustOfflineRenderer } from "./faust-offline-renderer";
import { all } from "./dsp-definitions/all";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
} from "react-router-dom";
import { DspDefinition } from "./types";

const baseUrl = import.meta.env.BASE_URL;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={baseUrl}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<List />} />
          <Route path=":id" element={<DspRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
      <ListHeader>Faust sketches</ListHeader>
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

type DspProps = {
  dspDefinition: DspDefinition;
};

function Dsp(props: DspProps) {
  const { dspDefinition } = props;
  const { name, description } = dspDefinition;

  useFaustLivePlayer(dspDefinition);
  useFaustOfflineRenderer(dspDefinition);

  return (
    <>
      <DspHeader>
        <strong>{name}</strong> - {description}
      </DspHeader>
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
