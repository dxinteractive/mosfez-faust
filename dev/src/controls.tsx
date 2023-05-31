import {
  isUItemGroup,
  isUItemNumber,
  isUItemBoolean,
  isUItemBarGraph,
  UIItem,
} from "mosfez-faust/faust";

import { useState } from "react";

import classes from "./controls.module.css";
import type { FaustNode } from "mosfez-faust/faust";

import { useAnimationFrame } from "./utils/use-animation-frame";

export type ControlNode = Pick<
  FaustNode,
  "setParamValue" | "getParamValue" | "getOutputValue"
>;

export type ControlsProps = {
  items: UIItem[];
  node: ControlNode;
};

export function Controls(props: ControlsProps) {
  const { items, node } = props;
  return (
    <>
      {items.map((item) => (
        <Control key={item.label} item={item} node={node} />
      ))}
    </>
  );
}

type ControlProps = {
  item: UIItem;
  node: ControlNode;
};

function Control(props: ControlProps) {
  const { item, node } = props;

  if (isUItemGroup(item)) {
    return (
      <div className={classes.control}>
        <div>{item.label}</div>
        <div>
          <Controls items={item.items} node={node} />
        </div>
      </div>
    );
  }

  if (isUItemNumber(item)) {
    const [value, setValue] = useState(() => {
      const initial = node.getParamValue(item.address);
      return Math.round(initial / item.step) * item.step;
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setValue(value);
      node.setParamValue(item.address, value);
    };

    return (
      <div className={classes.control}>
        <div>
          {item.label} <span className={classes.value}>[{value}]</span>
          <div className={classes.inputContainer}>
            <input
              className={classes.inputRange}
              type="range"
              value={value}
              onChange={handleChange}
              min={item.min}
              max={item.max}
              step={item.step}
            />
            <input
              type="number"
              value={value}
              onChange={handleChange}
              min={item.min}
              max={item.max}
              step={item.step}
            />
          </div>
        </div>
      </div>
    );
  }

  if (isUItemBoolean(item)) {
    const [value, setValueState] = useState(() => {
      return node.getParamValue(item.address);
    });

    const setValue = (value: number) => {
      setValueState(value);
      node.setParamValue(item.address, value);
    };

    const buttonProps =
      item.type === "button"
        ? {
            onPointerDown: () => setValue(1),
            onPointerUp: () => setValue(0),
          }
        : {
            onClick: () => setValue(value ? 0 : 1),
          };

    return (
      <div className={classes.control}>
        <div>
          {item.label} <span className={classes.value}>[{value}]</span>
          <div>
            <button {...buttonProps} className={classes.button}>
              {item.label}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isUItemBarGraph(item)) {
    const [value, setValueState] = useState(0);

    useAnimationFrame(() => {
      const value = node.getOutputValue(item.address);
      setValueState(value);
    }, [node, item]);

    return (
      <div className={classes.control}>
        <div>
          {item.label} <span className={classes.value}>[{value}]</span>
          <div className={classes.inputContainer}>
            <input
              className={classes.inputRange}
              type="range"
              value={value}
              min={item.min}
              max={item.max}
              step={0.0001}
              disabled
            />
            <input type="text" value={value} disabled />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
