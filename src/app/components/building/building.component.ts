import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent {
  @Input() object: any

  visible: boolean = false;
  toggle = ()=> {
    this.visible = !this.visible
  }
}
