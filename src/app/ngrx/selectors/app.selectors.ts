import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../reducers/app.reducer';
import { Marker } from '../../model/marker';
import { LatLng } from '../../model/latlng';

export const getApp = createFeatureSelector<AppState>("app");

export const selectCurrentPosition = createSelector(getApp, state => state.currentPosition);

export const selectSelectedMarker = createSelector(getApp, state => state.selectedMarker);

export const selectAllMarkers = createSelector(getApp, state => state.markers);

export const selectMarkers500m = createSelector(
    selectCurrentPosition,
    selectAllMarkers,
    (currentPosition: LatLng, markers: Marker[] | null) =>
        markers ? markers.filter(m => google.maps.geometry.spherical.computeDistanceBetween(m.position, currentPosition) <= 500) : null
);

export const selectMarkers1km = createSelector(
    selectCurrentPosition,
    selectAllMarkers,
    (currentPosition: LatLng, markers: Marker[] | null) =>
        markers ? markers.filter(m => google.maps.geometry.spherical.computeDistanceBetween(m.position, currentPosition) <= 1000) : null
);

export const selectMarkers2km = createSelector(
    selectCurrentPosition,
    selectAllMarkers,
    (currentPosition: LatLng, markers: Marker[] | null) =>
        markers ? markers.filter(m => google.maps.geometry.spherical.computeDistanceBetween(m.position, currentPosition) <= 2000) : null
);
