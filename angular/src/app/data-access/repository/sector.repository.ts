import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sector} from "../../models/Sector";

@Injectable({
  providedIn: 'root'
})
export class SectorRepository {

  protected baseUrl = 'http://localhost:8008';
  protected url = '/v1/api/sector';

  constructor(private http: HttpClient) { }

  getAllSectors(): Observable<Sector[]> {
    console.log(`${this.baseUrl}${this.url}/all`)
    return this.http.get<Sector[]>(`${this.baseUrl}${this.url}/all`);
  }
}
