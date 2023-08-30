import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProjectComponent } from './components/project/project.component';
import { RealtyobjectComponent } from './components/realtyobject/realtyobject.component';
import { BuildingComponent } from './components/building/building.component';
import { SectionComponent } from './components/section/section.component';
import { FloorComponent } from './components/floor/floor.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ProjectComponent,
    RealtyobjectComponent,
    BuildingComponent,
    SectionComponent,
    FloorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
