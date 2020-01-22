import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../_core/services/planets.service';
import { Observable } from 'rxjs';
import { Planet } from '../_core/interfaces/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  public planets: Observable<Planet[]>;

  constructor(private planetsService: PlanetsService) {
  }

  ngOnInit() {
    this.planets = this.planetsService.getPlanets();
  }

}
