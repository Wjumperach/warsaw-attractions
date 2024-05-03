import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Marker } from '../../model/marker';

export const attractionActions = createActionGroup({
  source: 'Attraction',
  events: {
    'Load Attractions': emptyProps(),
    'Load Attractions Success': props<{ markers: Marker[] }>(),
    'Load Attractions Failure': props<{ error: string | null }>(),
  }
});
