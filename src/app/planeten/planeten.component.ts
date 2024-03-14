import { Component } from '@angular/core';
import { Planet } from '../planet';
import { PLANETEN } from '../solar-planeten';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanetService } from '../planet.service';

@Component({
  // standalone: true,
  selector: 'app-planeten',
  templateUrl: './planeten.component.html',
  styleUrls: ['./planeten.component.css'],
  // imports: [
  //   FormsModule,
  //   NgIf,
  //   NgFor,
  //   UpperCasePipe,
  // ],
  })
  
  export class PlanetenComponent {
    // planeten = PLANETEN;
    selectedPlanet?: Planet;

    planeten: Planet[] = [];

    constructor(private planetService: PlanetService) {}

    onSelect(planet: Planet) : void {
      this.selectedPlanet = planet;
    }
    
  }
  
  