import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Floor } from '../models/floor';
import { Building } from '../models/building';
import { Section } from '../models/section';
import { Realtyobject } from '../models/realtyobject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects$: Project[];
  buildings$: Building[];
  sections$: Section[];
  floors$: Floor[];
  realtyobjects$: Realtyobject[];

  constructor(private http: HttpClient) {
    this.getAllProjects().subscribe(projects => {
      this.projects$ = projects;
    })

    this.getAllBuildings().subscribe(buildings => {
      this.buildings$ = buildings;
    })

    this.getAllSections().subscribe(sections => {
      this.sections$ = sections;
    })

    this.getAllFloors().subscribe(floors => {
      this.floors$ = floors;
    })

    this.getAllRealtyobjects().subscribe(realtyobjects => {
      this.realtyobjects$ = realtyobjects;
    })
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:64382/api/projects');
  }

  getAllBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>('http://localhost:64382/api/buildings');
  }

  getAllSections(): Observable<Section[]> {
    return this.http.get<Section[]>('http://localhost:64382/api/sections');
  }

  getAllFloors(): Observable<Floor[]> {
    return this.http.get<Floor[]>('http://localhost:64382/api/floors');
  }

  getAllRealtyobjects(): Observable<Realtyobject[]> {
    return this.http.get<Realtyobject[]>('http://localhost:64382/api/realtyobjects');
  }
}
