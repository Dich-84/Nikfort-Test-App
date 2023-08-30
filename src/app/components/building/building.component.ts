import { Section } from './../../models/section';
import { Component, Input } from '@angular/core';
import { nf_section } from 'src/app/data/sections';
import { Building } from 'src/app/models/building';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})

export class BuildingComponent {
  
  @Input() building: Building

  sections: Section[] = nf_section

  visible: boolean = false;
  toggle = ()=> {
    this.visible = !this.visible
  }
}
