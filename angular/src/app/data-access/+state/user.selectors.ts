import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from './user.reducer';

export const selectUserFeature = createFeatureSelector<UserState>('userFeatureKey');

export const selectCurrentUser = createSelector(
  selectUserFeature,
  (state: UserState) => state ? state.user : null
);
