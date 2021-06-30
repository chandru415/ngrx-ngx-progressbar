import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProgressbarEffects } from './progressbar.effects';

describe('ProgressbarEffects', () => {
  let actions$: Observable<any>;
  let effects: ProgressbarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgressbarEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProgressbarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
