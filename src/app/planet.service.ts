import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { PLANETEN } from './solar-planeten';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  getPlaneten() : Planet[] {
    return PLANETEN;
  }

  constructor() { }
}
