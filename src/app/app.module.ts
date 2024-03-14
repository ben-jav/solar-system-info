import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetenComponent } from './planeten/planeten.component';
import { FormsModule } from '@angular/forms';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PlanetenComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
