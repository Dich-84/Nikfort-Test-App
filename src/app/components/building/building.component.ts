import { Component, Input } from '@angular/core';
import { nf_building, nf_section } from 'src/app/data/realtyobjects';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent {
  @Input() section: any
  @Input() building: any

  sections = nf_section
  buildings = nf_building
  
  id: any = ''

  constructor() {
   
  }

  

  visible: boolean = false;
  toggle = ()=> {
    this.visible = !this.visible
  }
}
