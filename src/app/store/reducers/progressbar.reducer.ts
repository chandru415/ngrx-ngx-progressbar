import { Action, createReducer, on } from '@ngrx/store';
import * as ProgressbarActions from '../actions/progressbar.actions';

import * as fromRoot from '../../store/reducers';

export const progressbarFeatureKey = 'progressbar';

export interface State extends fromRoot.State {
  progressbarState: ProgressbarState;
}

export interface ProgressbarState {
  isProgress: boolean;
}

export const progressbarInitialState: ProgressbarState = {
  isProgress: false,
};

export const progrssbarReducer = createReducer(
  progressbarInitialState,
  on(ProgressbarActions.startProgressbars, (state) => {
    return { ...state, isProgress: true };
  }),
  on(ProgressbarActions.CompleteProgressbars, (state) => {
    return { ...state, isProgress: false };
  })
);
