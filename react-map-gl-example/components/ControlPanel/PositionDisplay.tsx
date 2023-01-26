import React from "react";
import { useAtom } from "jotai";
import { mapCenterAtom } from "@/lib/mapStore";

const PositionDisplay = () => {
	const [center] = useAtom(mapCenterAtom);
	return (
		<div>
			<div>lat: {center?.lat.toFixed(2)}</div>
			<div>lng: {center?.lng.toFixed(2)}</div>
		</div>
	);
};

export default PositionDisplay;
