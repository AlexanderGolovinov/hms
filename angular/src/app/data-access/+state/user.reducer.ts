import {createReducer, on} from '@ngrx/store';
import {User} from '../../models/User';
import * as UserActions from './user.actions';

export interface UserState {
  user: User | null;
}

export const initialState: UserState = {
  user: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.setUser, (state, {user}) => ({...state, user})),
);
