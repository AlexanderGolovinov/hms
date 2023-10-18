import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Sector} from "../../models/Sector";
import {SectorRepository} from "../repository/sector.repository";

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor(private sectorRepository: SectorRepository) { }

  getAllSectors(): Observable<Sector[]> {
    return this.sectorRepository.getAllSectors();
  }
}
