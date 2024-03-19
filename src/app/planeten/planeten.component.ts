import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PLANETEN } from '../solar-planeten';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanetService } from '../planet.service';
import { MessageService } from '../message.service';

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
  
  export class PlanetenComponent implements OnInit {
    // planeten = PLANETEN;
    // selectedPlanet?: Planet;

    planeten: Planet[] = [];
    
    constructor(private planetService: PlanetService) {}
    
    ngOnInit() : void {
      this.getPlaneten();
    }

    getPlaneten() : void {
      this.planetService.getPlaneten()
        .subscribe( p => this.planeten = p );
    }

    vergroessern(event: MouseEvent) {
      const element = event.target as HTMLImageElement;
      element.style.transform = "scale(1.1)";
    }
  
    normal(event: MouseEvent) {
      const element = event.target as HTMLImageElement;
      element.style.transform = "scale(1)";
    }


    // onSelect(planet: Planet) : void {
    //   this.selectedPlanet = planet;
    //   this.messageService.add(`PlanetenComponent:
    //                   Selected Planet id = ${planet.id}`);
    // }
    
  }
  
  