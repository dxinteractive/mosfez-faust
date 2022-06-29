import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo-yalc.module.css";

import thing from "mosfez-faust";
import other from "mosfez-faust/other";

console.log(thing(), other());

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  return <div className={classes.main}>yalc test</div>;
}
