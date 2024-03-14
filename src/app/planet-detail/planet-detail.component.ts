import { Component, Input } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent {
  @Input() planet?: Planet;
}
