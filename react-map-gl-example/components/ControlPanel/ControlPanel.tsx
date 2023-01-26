import React from "react";
import { useAtom } from "jotai";
import { mapAtom, mapCursorAtom, mapDrawAtom } from "@/lib/mapStore";
import PositionDisplay from "./PositionDisplay";

const ControlPanel = () => {
  const [map] = useAtom(mapAtom);
  const [mapDraw] = useAtom(mapDrawAtom);
  const [, setMapCursor] = useAtom(mapCursorAtom);

  const onMoveClick = () => {
    // Ask permission from the user to find their location
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      map?.setCenter([longitude, latitude]);
      map?.setZoom(10);
    });
  };
  const onFlyClick = () => {
    // Ask permission from the user to find their location
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      map?.flyTo({
        center: [longitude, latitude],
        zoom: 10,
      });
    });
  };
  const onDrawClick = () => {
    setMapCursor("crosshair");
    mapDraw?.changeMode("draw_polygon");
  };
  const onLogLayers = () => {
    console.log(map?.getStyle().layers);
    console.log(mapDraw?.getAll());
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
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
      {/* <button onClick={onDrawClick}>Draw</button>
			<button onClick={onLogLayers}>Log Layers</button> */}
    </div>
  );
};

export default ControlPanel;
