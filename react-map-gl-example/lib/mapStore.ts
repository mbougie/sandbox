import { atom } from "jotai";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { MapRef } from "react-map-gl";

export const mapAtom = atom<MapRef | null>(null);
export const mapCenterAtom = atom((get) => get(mapAtom)?.getCenter());
export const mapDrawAtom = atom<MapboxDraw | null>(null);
export const mapCursorAtom = atom("grab");
