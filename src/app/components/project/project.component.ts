import { Building } from './../../models/building';
import { nf_building } from '../../data/buildings';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent {

  buildings: Building[] = nf_building

}
