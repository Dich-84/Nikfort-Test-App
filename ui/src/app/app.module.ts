import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/interface-components/filter/filter.component';
import { ProjectComponent } from './components/data-components/project/project.component';
import { RealtyobjectComponent } from './components/data-components/realtyobject/realtyobject.component';
import { BuildingComponent } from './components/data-components/building/building.component';
import { SectionComponent } from './components/data-components/section/section.component';
import { FloorComponent } from './components/data-components/floor/floor.component';
import { ContextMenuComponent } from './components/interface-components/context-menu/context-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FilterServiceService } from './services/filter-service.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ProjectComponent,
    RealtyobjectComponent,
    BuildingComponent,
    SectionComponent,
    FloorComponent,
    ContextMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule
  ],
  providers: [FilterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
