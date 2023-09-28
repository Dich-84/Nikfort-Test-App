import { Status } from 'src/app/data/realtyobjectStatus';
import { Realtyobject } from '../../../models/realtyobject';
import { Component, HostListener, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-realtyobject',
  templateUrl: './realtyobject.component.html',
  styleUrls: ['./realtyobject.component.scss']
})
export class RealtyobjectComponent {
  
  @Input() realtyobject: Realtyobject;
  @Input() isDisplayContextMenu: boolean;
 
  status = Status;
  realtyobjectsList: any = document.getElementsByClassName("realtyobject");

  constructor(private dataService: DataService) {
  }

  disableHover(): void {
    for(let i = 0; i < this.realtyobjectsList.length; i++) {
      this.realtyobjectsList[i].classList.remove("hasHover");
      }  
  };

  enableHover(): void {
    for(let i = 0; i < this.realtyobjectsList.length; i++) {
      this.realtyobjectsList[i].classList.add("hasHover");
      }
  }

  makeActive(evt: any): void {
    for(let i = 0; i < this.realtyobjectsList.length; i++) {
    this.realtyobjectsList[i].className = this.realtyobjectsList[i].className.replace(" active", "");
    }  
    document.getElementById(evt.currentTarget.id)!.className += " active";
  };
 
  rightClickMenuItems: string[] = ['Изменить статус'];
  rightClickMenuPositionX: number;
  rightClickMenuPositionY: number;

  displayContextMenu(event: any): void {  
    this.isDisplayContextMenu = true;

    this.rightClickMenuPositionX = event.clientX;
    this.rightClickMenuPositionY = event.clientY;

    this.disableHover()
    this.makeActive(event)
  };

  getRightClickMenuStyle() {
    return {
      position: 'fixed',
      left: `${this.rightClickMenuPositionX}px`,
      top: `${this.rightClickMenuPositionY}px`
    }
  };

  handleStatusItemClick(event: any): void {
    this.realtyobject.nf_status = event.data;
    this.isDisplayContextMenu = false;
    this.enableHover();
    this.dataService
        .updateRealtyobjectStatus(this.realtyobject)
        .subscribe()
  };

  @HostListener('document:click')
    onDocumentClick(): void {
      let menu: any = document.getElementById('context')
      if (event?.target === menu || menu?.contains(event?.target)) {
        return;
      } 
      this.isDisplayContextMenu = false;
      this.enableHover()
   };

  onBlur(): void {
      if(this.isDisplayContextMenu) {
        this.isDisplayContextMenu = false;
      }
  }
}
