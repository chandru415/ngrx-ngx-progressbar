import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ProgressbarActions from '../actions/progressbar.actions';
import { NgProgress } from 'ngx-progressbar';

@Injectable()
export class ProgressbarEffects {
  completeSpinners$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProgressbarActions.CompleteProgressbars),
        tap(() => this.progress.ref('custom-ngx-progressbar').complete())
      ),
    { dispatch: false }
  );

  startSpinners$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProgressbarActions.startProgressbars),
        map((action) => action),
        tap(() => this.progress.ref('custom-ngx-progressbar').start())
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private progress: NgProgress) {}
}
