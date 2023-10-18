import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UserService} from '../services/user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private userService: UserService
  ) {
  }

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUser),
    mergeMap(action => this.userService.getCurrentUserData(action.id).pipe(
      map(user => UserActions.setUser({user})),
      catchError(() => EMPTY)
    ))
  ));

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.updateUser),
    mergeMap(action => this.userService.updateUser(action.user).pipe(
      map(user => UserActions.setUser({user})),
      catchError(() => EMPTY)
    ))
  ));

  saveUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.saveUser),
    mergeMap(action => this.userService.saveUserData(action.user).pipe(
      map(user => UserActions.setUser({user})),
      catchError(() => EMPTY)
    ))
  ));
}
