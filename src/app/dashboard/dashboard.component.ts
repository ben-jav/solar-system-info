import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  planeten: Planet[] = [];

  constructor(private planetService: PlanetService) {}

  ngOnInit() : void {
    this.getPlaneten();
  }

  getPlaneten() : void {
    
    this.planetService.getPlaneten()
      .subscribe(planeten => this.planeten = planeten.slice(1,5));
  }

}
