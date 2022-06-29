// import React, { useEffect, useState, useCallback } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo.module.css";

import FaustThing from "mosfez-faust/v0";

console.log("FaustThing", FaustThing);

const faust = new FaustThing();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

function Demo() {
  // const [ready, setReady] = useState(false);
  // const [started, setStarted] = useState(false);

  // useEffect(() => {
  //   synth.ready.then(() => setReady(true));
  // }, []);

  // const handleStart = useCallback(async () => {
  //   await synth.start();
  //   setStarted(true);
  // }, []);

  // if (!ready) {
  //   return (
  //     <div className={classes.demo}>
  //       <div className={classes.text}>Loading...</div>
  //     </div>
  //   );
  // }

  // if (!started) {
  //   return (
  //     <div className={classes.demo} onClick={handleStart}>
  //       <div className={classes.text}>Click to start</div>
  //     </div>
  //   );
  // }

  return (
    <div className={classes.demo} onClick={() => faust.init()}>
      faust time
    </div>
  );
}
