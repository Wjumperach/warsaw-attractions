import { LatLng } from "./latlng";

export interface Attraction {
    id: number;
    name: string;
    latlng: LatLng;
    description: string;
}
