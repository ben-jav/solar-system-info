import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { PLANETEN } from './solar-planeten';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  
  constructor(private messageService: MessageService) { }
  
  getPlanet(id: number) : Observable<Planet> {
    const planet = PLANETEN.find(p => p.id === id)!;
    this.messageService.add(`PlanetService: fetched planet id=${id}`);
    return of(planet);
  }

  getPlaneten() : Observable<Planet[]> {
    const planeten = of(PLANETEN);
    this.messageService.add('PlanetService: fetched, Planet ist da!');
    return planeten;
  }

}
