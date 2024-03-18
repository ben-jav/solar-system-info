import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetenComponent } from './planeten/planeten.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
  { path: 'planeten', component: PlanetenComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: PlanetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
