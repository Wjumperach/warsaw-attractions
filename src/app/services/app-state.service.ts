import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../ngrx/reducers/app.reducer';
import {
  selectCurrentPosition,
  selectSelectedMarker,
  selectAllMarkers,
  selectMarkers500m,
  selectMarkers1km,
  selectMarkers2km
} from '../ngrx/selectors/app.selectors';
import { changeCurrentPosition, changeSelectedMarker } from '../ngrx/actions/app.actions';
import { attractionActions } from '../ngrx/actions/attraction.actions';
import { Marker } from '../model/marker';
import { LatLng } from '../model/latlng';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private store = inject(Store<AppState>);

  currentPosition = this.store.select(selectCurrentPosition);

  selectedMarker = this.store.select(selectSelectedMarker);

  allMarkers = this.store.select(selectAllMarkers);

  markers500m = this.store.select(selectMarkers500m);

  markers1km = this.store.select(selectMarkers1km);

  markers2km = this.store.select(selectMarkers2km);

  loadAttractions() {
    this.store.dispatch(attractionActions.loadAttractions());
  }

  changeCurrentPosition(currentPosition: LatLng) {
    this.store.dispatch(changeCurrentPosition({ currentPosition }));
  }

  changeSelectedMarker(marker: Marker) {
    this.store.dispatch(changeSelectedMarker({ marker }));
  }

}
