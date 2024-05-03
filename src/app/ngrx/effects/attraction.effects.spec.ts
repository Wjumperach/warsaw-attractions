import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AttractionEffects } from './attraction.effects';

describe('AttractionEffects', () => {
  let actions$: Observable<any>;
  let effects: AttractionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AttractionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AttractionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
