import { useAtom } from "jotai";
import mapboxgl from "mapbox-gl";
import { mapAtom, mapCursorAtom, mapDrawAtom } from "@/lib/mapStore";

export const SELECTED_DRAWN_LAYER_IDS = [
	"gl-draw-polygon-fill-active.hot",
	"gl-draw-polygon-fill-active.cold",
];
export const UNSELECTED_DRAWN_LAYER_IDS = [
	"gl-draw-polygon-fill-inactive.hot",
	"gl-draw-polygon-fill-inactive.cold",
];
export const DRAWN_LAYER_IDS = [
	...SELECTED_DRAWN_LAYER_IDS,
	...UNSELECTED_DRAWN_LAYER_IDS,
];

const isSelectedDrawnLayerId = (id: string) =>
	SELECTED_DRAWN_LAYER_IDS.includes(id);
const isUnselectedDrawnLayerId = (id: string) =>
	UNSELECTED_DRAWN_LAYER_IDS.includes(id);

const useEventHandlers = () => {
	const [map] = useAtom(mapAtom);
	const [mapDraw] = useAtom(mapDrawAtom);
	const [, setMapCursor] = useAtom(mapCursorAtom);

	const onMouseEnter = (e: mapboxgl.MapLayerMouseEvent) => {
		const mode = mapDraw?.getMode();
		const layerId = String(e.features?.[0].layer.id);
		// not drawing
		if (mode === "simple_select") {
			if (isSelectedDrawnLayerId(layerId)) {
				// mouse enters a selected polygon
				setMapCursor("move");
			} else if (isUnselectedDrawnLayerId(layerId)) {
				// mouse enters an unselected polygon
				setMapCursor("pointer");
			}
		}
		// creating drawing
		if (mode === "draw_polygon") {
			// mouse enters a drawn polygon
		}
		// editing drawing
		if (mode === "direct_select") {
			// mouse enters a selected polygon
			setMapCursor("move");
		}

		console.log(`enter - ${mode} - ${layerId}`);
	};

	const onMouseLeave = (e: mapboxgl.MapLayerMouseEvent) => {
		const mode = mapDraw?.getMode();
		const layerId = String(e.features?.[0].layer.id);
		// not drawing
		if (mode === "simple_select") {
			// mouse leaves an unselected polygon
			if (
				isSelectedDrawnLayerId(layerId) ||
				isUnselectedDrawnLayerId(layerId)
			) {
				setMapCursor("grab");
			}
		}
		// creating drawing
		if (mode === "draw_polygon") {
			// mouse leaves a drawn polygon
		}
		// editing drawing
		if (mode === "direct_select") {
			// mouse leaves a selected polygon
			setMapCursor("grab");
		}
		console.log(`leave - ${mode} - ${layerId}`);
	};

	const onClick = (e: mapboxgl.MapLayerMouseEvent) => {
		const mode = mapDraw?.getMode();
		const layerId = String(e.features?.[0]?.layer.id);

		// not drawing
		if (mode === "simple_select") {
			// first click of a drawn polygon
			if (isUnselectedDrawnLayerId(layerId)) {
				setMapCursor("move");
			}
		}

		console.log(`click - ${mode} - ${layerId}`);
	};

	return { onMouseEnter, onMouseLeave, onClick };
};

export default useEventHandlers;
