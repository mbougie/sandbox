import { mapAtom, mapCursorAtom, mapDrawAtom } from "@/lib/mapStore";
import { useAtom } from "jotai";
import React from "react";

const useEventHandlers = () => {
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

  return { onMoveClick, onFlyClick, onDrawClick, onLogLayers };
};

export default useEventHandlers;

export const useCount = () => {
  const [count, setCount] = React.useState(0);

  const [double, setDouble] = React.useState(0);

  React.useEffect(() => {
    setDouble(2 * count);
  }, [count]);

  return { count, double, setCount };
};
