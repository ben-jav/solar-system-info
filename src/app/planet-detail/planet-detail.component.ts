import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from '../planet.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  planet: Planet | undefined;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    private location: Location
  ){}

  ngOnInit() : void {
    this.getPlanet();
  }

  getPlanet() : void {
    const id = 
      Number(this.route.snapshot.paramMap.get('id'));
    this.planetService.getPlanet(id)
      .subscribe(plnt => this.planet = plnt)
  }

  goBack() : void {
    this.location.back();
  }

}
