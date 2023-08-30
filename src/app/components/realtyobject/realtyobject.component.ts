import { Realtyobject } from './../../models/realtyobject';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-realtyobject',
  templateUrl: './realtyobject.component.html',
  styleUrls: ['./realtyobject.component.scss']
})
export class RealtyobjectComponent {
  
 @Input() realtyobject: Realtyobject

}
