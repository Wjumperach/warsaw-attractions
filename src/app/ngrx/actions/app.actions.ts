import { createAction, props } from '@ngrx/store';

import { Marker } from '../../model/marker';
import { LatLng } from '../../model/latlng';

export const changeCurrentPosition = createAction('[App] Change currentPosition', props<{ currentPosition: LatLng }>());

export const changeSelectedMarker = createAction('[App] Change selectedMarker', props<{ marker: Marker }>());
