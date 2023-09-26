import { DataService } from 'src/app/services/data.service';
import { Building } from '../../../models/building';
import { Section } from '../../../models/section';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})

export class BuildingComponent {
  
  @Input() building: Building;

  sections: Section[] = this.dataService.sections$;

  constructor(private dataService: DataService) {
  }
}
