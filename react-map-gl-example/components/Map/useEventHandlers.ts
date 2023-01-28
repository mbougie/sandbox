import mapboxgl from "mapbox-gl";

const useEventHandlers = () => {
  const onClick = (e: mapboxgl.MapLayerMouseEvent) => {
    alert(e.features);
    const layerId = String(e.features?.[0]?.layer.id);
  };

  return { onClick };
};

export default useEventHandlers;
