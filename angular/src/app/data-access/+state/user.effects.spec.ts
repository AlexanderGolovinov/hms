import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable, of, throwError} from 'rxjs';
import {UserEffects} from "./user.effects";
import {UserService} from "../services/user.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {User} from "../../models/User";
import * as UserActions from "../+state/user.actions";

describe('UserEffects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        provideMockStore()
      ]
    });

    effects = TestBed.inject(UserEffects);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('updateUser$', () => {
    it('should return a setUser action on successful update', () => {
      const user: User = {id: 1, name: 'John', sectors: [], agreeToTerms: true};
      const action = UserActions.updateUser({user});
      const completion = UserActions.setUser({user});

      actions$ = of(action);

      effects.updateUser$.subscribe(action => {
        expect(action).toEqual(completion);
      });
      httpMock.expectOne('http://localhost:8008/v1/api/user/update').flush(user);
    });
  });

  describe('saveUser$', () => {
    it('should return a setUser action on successful save', () => {
      const user: User = {id: 1, name: 'John', sectors: [], agreeToTerms: true};
      const action = UserActions.saveUser({user});
      const completion = UserActions.setUser({user});

      actions$ = of(action);

      effects.saveUser$.subscribe(action => {
        expect(action).toEqual(completion);
      });

      httpMock.expectOne('http://localhost:8008/v1/api/user/save').flush(user);
    });
  });

});
