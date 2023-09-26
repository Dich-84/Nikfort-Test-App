import { DataService } from 'src/app/services/data.service';
import { Realtyobject } from '../../../models/realtyobject';
import { Floor } from '../../../models/floor';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})

export class FloorComponent {
  @Input() floor: Floor;
 
  realtyobjects: Realtyobject[] = this.dataService.realtyobjects$;

  constructor(private dataService: DataService) {
  }
}
