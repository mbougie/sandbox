import React from "react";
import { ControlPosition, useControl } from "react-map-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { useAtom } from "jotai";
import { mapDrawAtom } from "@/lib/mapStore";

type DrawLayer = {
	geometry: any;
	id: string;
	properties: any;
	type: string;
};

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
	position?: ControlPosition;
	onCreate?: (evt: { features: DrawLayer[] }) => void;
	onUpdate?: (evt: { features: DrawLayer[]; action: string }) => void;
	onDelete?: (evt: { features: DrawLayer[] }) => void;
};

const DrawControl = (props: DrawControlProps) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const mapDraw = React.useMemo(() => new MapboxDraw(props), []);
	const [, setMapDraw] = useAtom(mapDrawAtom);

	React.useEffect(() => {
		setMapDraw(mapDraw);
		return () => {
			setMapDraw(null);
		};
	}, [setMapDraw, mapDraw]);

	useControl<MapboxDraw>(
		() => mapDraw,
		({ map }: { map: any }) => {
			map.on("draw.create", props.onCreate);
			map.on("draw.update", props.onUpdate);
			map.on("draw.delete", props.onDelete);
		},
		({ map }: { map: any }) => {
			map.off("draw.create", props.onCreate);
			map.off("draw.update", props.onUpdate);
			map.off("draw.delete", props.onDelete);
		}
	);

	return null;
};

export default DrawControl;
