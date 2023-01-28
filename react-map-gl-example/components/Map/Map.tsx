import React from "react";
import MapGL, { ViewState, Popup } from "react-map-gl";
import { useAtom } from "jotai";
import { mapAtom, mapCursorAtom } from "@/lib/mapStore";
import "mapbox-gl/dist/mapbox-gl.css";
import useEventHandlers from "./useEventHandlers";

type Props = {
  initialViewState?: Partial<ViewState>;
  children?: React.ReactNode;
};
const Map = (props: Props) => {
  const [viewState, setViewState] = React.useState(props.initialViewState);
  const [, setMap] = useAtom(mapAtom);
  const [cursor, setMapCursor] = useAtom(mapCursorAtom);
  const eventHandlers = useEventHandlers();

  return (
    <MapGL
      {...viewState}
      {...eventHandlers}
      id="main"
      ref={(ref) => setMap(ref)}
      onMove={(e) => setViewState(e.viewState)}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      cursor={cursor}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
    >
      {props.children}
    </MapGL>
  );
};

export default Map;
