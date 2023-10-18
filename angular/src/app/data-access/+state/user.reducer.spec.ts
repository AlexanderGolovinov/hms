import {User} from "../../models/User";
import * as UserActions from "../+state/user.actions";
import {initialState, userReducer, UserState} from "./user.reducer";

describe('User Reducer', () => {
  describe('valid User actions', () => {
    it('setUser should return set the user to the known value', () => {
      const user: User = {id: 1, name: 'John', sectors: [], agreeToTerms: true};
      const action = UserActions.setUser({user});

      const result: UserState = userReducer(initialState, action);

      expect(result.user).toBe(user);
      expect(result.user?.id).toBe(1);
    });
  });
});
