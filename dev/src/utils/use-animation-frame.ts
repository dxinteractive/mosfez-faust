import { useEffect, useRef } from "react";

type Callback = (time: number, delta: number) => unknown;

export const useAnimationFrame = (cb: Callback, deps: unknown[]): void => {
  const frame = useRef<number>(0);
  const last = useRef<number>(performance.now());
  const init = useRef<number>(performance.now());

  const animate = () => {
    const now = performance.now();
    const time = (now - init.current) / 1000;
    const delta = (now - last.current) / 1000;
    cb(time, delta);
    last.current = now;
    frame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, deps);
};
