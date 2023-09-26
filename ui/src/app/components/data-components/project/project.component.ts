import { Building } from '../../../models/building';
import { Component, OnInit } from '@angular/core';
import { FilterServiceService } from 'src/app/services/filter-service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  
  buildings: Building[] = this.dataService.buildings$;
  filterBuildings: Building[] = [];
  hideFilter: Boolean = false

  constructor(private readonly svc: FilterServiceService, private dataService: DataService) {}
  
  ngOnInit(): void {
    this.svc.filteredBuildings$.subscribe((filteredBuildings: Building[]) => this.filterBuildings = filteredBuildings);
  }

  showTab(evt: any, buildingName: string): void {
    let sections: any = document.getElementsByClassName('sections');
    for(let i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }

    let tablinks: any = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(buildingName)!.style.display = "flex"
    evt.currentTarget!.className += ' active'
  }

  handleFilterHide(){
      this.hideFilter ? document.getElementById('filter-panel')!.style.display = "block" : document.getElementById('filter-panel')!.style.display = "none";
      this.hideFilter = !this.hideFilter;
  }
}
