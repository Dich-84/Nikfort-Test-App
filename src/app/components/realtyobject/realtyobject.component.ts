import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-realtyobject',
  templateUrl: './realtyobject.component.html',
  styleUrls: ['./realtyobject.component.scss']
})
export class RealtyobjectComponent {
  
  @Input() section: any
  @Input() building: any

}
