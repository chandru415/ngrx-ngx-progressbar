import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProgressbar from '../reducers/progressbar.reducer';

export const selectProgressbarState =
  createFeatureSelector<fromProgressbar.ProgressbarState>(
    fromProgressbar.progressbarFeatureKey
  );

export const isProgress = createSelector(selectProgressbarState, (state) =>
  state ? state.isProgress : false
);
