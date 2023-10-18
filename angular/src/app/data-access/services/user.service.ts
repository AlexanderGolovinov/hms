import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../models/User";
import {UserRepository} from "../repository/user.repository";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private userRepository: UserRepository) {
  }

  saveUserData(user: User): Observable<User> {
    return this.userRepository.saveUser(user);
  }

  getCurrentUserData(id: number): Observable<User> {
    return this.userRepository.getCurrentUserData(id);
  }

  updateUser(user: User): Observable<User> {
    return this.userRepository.updateUser(user);
  }

}
