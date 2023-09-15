import { Project } from './../../../models/project';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nf_building } from 'src/app/data/buildings';
import { nf_project } from 'src/app/data/projects';
import { Building } from 'src/app/models/building';
import { FilterServiceService } from 'src/app/services/filter-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  
  buildingList: Building[];
  selectedProjects: string[] = [];

  projects: Project[] = nf_project;
  buildings: Building[] = nf_building;
  
  projectDropdownList: any;
  buildingDropdownList: any;
  projectDropdownSettings: any;
  buildingDropdownSettings: any;
  form: FormGroup;
  private readonly svc: FilterServiceService;
  

  constructor(private formBuilder: FormBuilder, svc: FilterServiceService) {
    this.svc = svc
  }
  
  ngOnInit(): void {
    this.initForm();
    this.projectDropdownList = this.getProjectData();
    this.buildingDropdownList = [];
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

  initForm() {
    this.form = this.formBuilder.group({
      projects: ['', [Validators.required]],
      buildings: ['', [Validators.required]]
    })
  }
  
  getProjectData(): Array<any>{
    return this.projects;
  }

  getBuildingData(): Array<any>{
    return this.buildings.filter(building => this.selectedProjects.includes(building.nf_projectid))
  }

  onItemSelect($event: any) {
    this.selectedProjects.push($event.nf_projectid)
    this.buildingDropdownList = this.getBuildingData()
  }

  onItemDeSelect($event: any){
    this.selectedProjects.splice(this.selectedProjects.indexOf($event.nf_projectid), 1)
    this.buildingDropdownList = this.getBuildingData()
  }

  onSelectAll($event: any) {
    this.selectedProjects = $event.map((project: { nf_projectid: string; }) => project.nf_projectid)
    this.buildingDropdownList = this.getBuildingData()
  }

  onDeSelectAll($event: any) {
    this.buildingDropdownList = []
  }

  handleButtonClick(){
    this.buildingList = this.form.value.buildings;
    this.svc.filterBuildings(this.buildingList)
  }
}
