import { Injectable } from '@angular/core';
import { Building } from '../models/building';
import { nf_building } from '../data/buildings';
import { Subject } from 'rxjs';
import { Project } from '../models/project';
import { nf_project } from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  projects: Project[] = nf_project;
  buildings: Building[] = nf_building;

  public filteredBuildings$ = new Subject<Building[]>();

  filterBuildings(buildingList: Building[]) {
    let filteredBuildingsList = buildingList.map(building => building.nf_buildingid);
    this.filteredBuildings$.next(this.buildings.filter(building => filteredBuildingsList.includes(building.nf_buildingid)));
  }

  constructor() {
   }
}
