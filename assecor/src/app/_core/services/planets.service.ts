import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Planet } from '../interfaces/planet';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private api: ApiService) { }

  getPlanets(): Observable<Planet[]> {
    return this.api.get('planets').pipe(map(
      (res) => {
        return res.results;
      }
    ));
  }
}
