import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const RasterLayer = ({ data, map }) => {
  const layerRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    const layer = new mapboxgl.RasterLayer({
      id: "raster-layer",
      data: data,
      opacity: 1,
    });

    layer.addTo(map);
    layerRef.current = layer;
  }, [map, data]);

  return null;
};

export default RasterLayer;
