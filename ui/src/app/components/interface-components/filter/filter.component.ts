import { Project } from './../../../models/project';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Building } from 'src/app/models/building';
import { FilterServiceService } from 'src/app/services/filter-service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  
  buildingList: Building[];
  selectedProjects: string[] = [];

  projects: Project[] = [];
  buildings: Building[] = [];
  
  projectDropdownSettings: any;
  buildingDropdownSettings: any;
  form: FormGroup;
  private readonly svc: FilterServiceService;
  

  constructor(private formBuilder: FormBuilder, svc: FilterServiceService, private dataService: DataService) {
    this.svc = svc;
  }
  
  ngOnInit(): void {
    this.initForm();
    this.getProjectData();
    this.projectDropdownSettings = {
      singleSelection: false,
      idField: 'nf_projectid',
      textField: 'nf_name',
      selectAllText: 'Выбрать все',
      unSelectAllText: 'Отменить выбор'
    };
    this.buildingDropdownSettings = {
      singleSelection: false,
      idField: 'nf_buildingid',
      textField: 'nf_name',
      selectAllText: 'Выбрать все',
      unSelectAllText: 'Отменить выбор',
      noDataAvailablePlaceholderText:'Не выбран проект. Список зданий недоступен'
    };
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      projects: ['', [Validators.required]],
      buildings: ['', [Validators.required]]
    })
  }
  
  getProjectData(): void {
    this.dataService.getAllProjects().subscribe(projects => {
      this.projects = projects;
    })
  }

  getBuildingData(): Array<Building> {
    this.buildings = this.dataService.buildings$;
    return this.buildings.filter(building => this.selectedProjects.includes(building.nf_projectid));
  }

  onItemSelect($event: any): void {
    this.selectedProjects.push($event.nf_projectid);
    this.buildings = this.getBuildingData();
  }

  onItemDeSelect($event: any): void {
    this.selectedProjects.splice(this.selectedProjects.indexOf($event.nf_projectid), 1);
    this.buildings = this.getBuildingData();
  }

  onSelectAll($event: any): void {
    this.selectedProjects = $event.map((project: { nf_projectid: string; }) => project.nf_projectid);
    this.buildings = this.getBuildingData();
  }

  onDeSelectAll($event: any): void {
    this.buildings = [];
  }

  handleButtonClick(): void {
    this.buildingList = this.form.value.buildings;
    this.svc.filterBuildings(this.buildingList);
  }
}
