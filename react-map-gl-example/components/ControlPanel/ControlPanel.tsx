import React from "react";

import PositionDisplay from "./PositionDisplay";
import useEventHandlers, { useCount } from "./useEventHandlers";

const ControlPanel = () => {
  /// destructuring
  const { onMoveClick, onFlyClick } = useEventHandlers();
  const { count, double, setCount } = useCount();

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "200px",
        padding: "8px 16px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        borderRadius: "4px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        rowGap: "6px",
      }}
    >
      <PositionDisplay />
      <button onClick={onMoveClick}>Find me! {"(move)"}</button>
      <button onClick={onFlyClick}>Find me! {"(fly)"}</button>

      <div>{count}</div>
      <div>{double}</div>
      <button
        onClick={() => {
          const x = count + 1;
          setCount(x);
        }}
      >
        counter
      </button>

      {/* <button onClick={onDrawClick}>Draw</button>
			<button onClick={onLogLayers}>Log Layers</button> */}
    </div>
  );
};

export default ControlPanel;
