import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, of, catchError } from 'rxjs';

import { attractionActions } from '../actions/attraction.actions';
import { AttractionsService } from '../../services/attractions.service';

@Injectable()
export class attractionEffects {

  private actions$ = inject(Actions);

  private attractionService = inject(AttractionsService);

  loadAttractions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(attractionActions.loadAttractions),
      switchMap(() =>
        this.attractionService.getAttractions().pipe(
          map(response =>
            attractionActions.loadAttractionsSuccess({
              markers: response.result.map(a => ({
                id: a.id,
                title: a.name,
                position: {
                  lat: +a.latlng.lat,
                  lng: +a.latlng.lng
                },
                description: a.description.replace('<div>', '').replace('</div>', '')
              }))
            })
          ),
          catchError(error => of(attractionActions.loadAttractionsFailure({ error })))
        )
      )
    )
  );
}
