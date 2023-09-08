import { Building } from '../../../models/building';
import { Section } from '../../../models/section';
import { Component, Input } from '@angular/core';
import { nf_section } from 'src/app/data/sections';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})

export class BuildingComponent {
  
  @Input() building: Building

  sections: Section[] = nf_section

}
