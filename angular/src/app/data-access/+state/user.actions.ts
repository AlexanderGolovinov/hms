import {createAction, props} from '@ngrx/store';
import {User} from '../../models/User';

export const saveUser = createAction(
  '[User] Save User',
  props<{ user: User }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
);

export const loadUser = createAction(
  '[User] Load User',
  props<{ id: number }>()
);

export const setUser = createAction(
  '[User] Set User',
  props<{ user: User }>()
);
