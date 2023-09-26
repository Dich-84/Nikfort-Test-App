import { Injectable } from '@angular/core';
import { Building } from '../models/building';
import { nf_building } from '../data/buildings';
import { Subject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  buildings: Building[] = [];
  public filteredBuildings$ = new Subject<Building[]>();

  constructor(private dataService: DataService) {
    this.dataService.getAllBuildings().subscribe(buildings => {
      this.buildings = buildings;
    })
   }

  filterBuildings(buildingList: Building[]) {
    let filteredBuildingsList = buildingList.map(building => building.nf_buildingid);
    this.filteredBuildings$.next(this.buildings.filter(building => filteredBuildingsList.includes(building.nf_buildingid)));
  }
}
