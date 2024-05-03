import { createReducer, on } from '@ngrx/store';

import { Marker } from '../../model/marker';
import { LatLng } from '../../model/latlng';
import { attractionActions } from '../actions/attraction.actions';
import { changeCurrentPosition, changeSelectedMarker } from '../actions/app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  currentPosition: LatLng;
  markers: Marker[] | null;
  selectedMarker: Marker | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  currentPosition: {
    lat: 52.2456545,
    lng: 21.0063041
  },
  markers: null,
  selectedMarker: null,
  loading: false,
  error: null
};

export const appReducer = createReducer(

  initialState,

  on(attractionActions.loadAttractions, state => {
    return {
      ...state,
      loading: true
    };
  }),

  on(attractionActions.loadAttractionsSuccess, (state, { markers }) => {
    return {
      ...state,
      loading: false,
      markers
    };
  }),

  on(attractionActions.loadAttractionsFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error
    };
  }),

  on(changeCurrentPosition, (state, { currentPosition }) => {
    return {
      ...state,
      currentPosition 
    };
  }),

  on(changeSelectedMarker, (state, { marker }) => {
    return {
      ...state,
      selectedMarker: marker 
    };
  }),

);

