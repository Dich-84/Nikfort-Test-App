import { Status } from 'src/app/data/realtyobjectStatus';
import { Realtyobject } from '../../../models/realtyobject';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-realtyobject',
  templateUrl: './realtyobject.component.html',
  styleUrls: ['./realtyobject.component.scss']
})
export class RealtyobjectComponent {
  
  @Input() realtyobject: Realtyobject;
  @Input() isDisplayContextMenu: boolean;
 
  status = Status;
 
  makeActive(evt: any) {
    let realtyobjects: any = document.getElementsByClassName("realtyobject");
    for(let i = 0; i < realtyobjects.length; i++) {
    realtyobjects[i].className = realtyobjects[i].className.replace(" active", "");
    }  
    document.getElementById(evt.currentTarget.id)!.className += " active";
  };
 
  rightClickMenuItems: string[] = ['Изменить статус'];
  rightClickMenuPositionX: number;
  rightClickMenuPositionY: number;

  displayContextMenu(event: any) {  
    this.isDisplayContextMenu = true;

    this.rightClickMenuPositionX = event.clientX;
    this.rightClickMenuPositionY = event.clientY;
  };

  getRightClickMenuStyle() {
    return {
      position: 'fixed',
      left: `${this.rightClickMenuPositionX}px`,
      top: `${this.rightClickMenuPositionY}px`
    }
  };

  handleStatusItemClick(event: any) {
    this.realtyobject.nf_status = event.data;
    this.isDisplayContextMenu = false;
  };

  @HostListener('document:click')
    onDocumentClick(): void {
      let menu: any = document.getElementById('context')
      if (event?.target === menu || menu?.contains(event?.target)) {
        return;
      } 
      this.isDisplayContextMenu = false;
   };

  @HostListener('document:contextmenu')
    onRightDocumentClick(): void {
      if(this.isDisplayContextMenu) {
        !this.isDisplayContextMenu;
      }
  }
}
