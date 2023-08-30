import { Realtyobject } from './../../models/realtyobject';
import { Floor } from './../../models/floor';
import { Component, Input } from '@angular/core';
import { nf_realtyobject } from 'src/app/data/realtyobjects';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})

export class FloorComponent {
  @Input() floor: Floor

  realtyobjects: Realtyobject[] = nf_realtyobject

}
