import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  protected baseUrl = 'http://localhost:8008';
  protected url = '/v1/api/user';

  constructor(private http: HttpClient) {
  }

  saveUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(`${this.baseUrl}${this.url}/save`, user, {headers});
  }

  getCurrentUserData(id: number): Observable<User>  {
    return this.http.get<User>(`${this.baseUrl}${this.url}/${id}`);
  }

  updateUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(`${this.baseUrl}${this.url}/update`, user, {headers});
  }
}
