import { LatLng } from "./latlng";

export interface Marker {
    id: number;
    title: string;
    position: LatLng;
    description?: string;
}
