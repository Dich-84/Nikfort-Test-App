import { Status } from './../../../data/realtyobjectStatus';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {

  @Input() contextMenuItems: string[];
  @Output() onStatusMenuItemClick: EventEmitter<any> = new EventEmitter<any>();

  status = Status;

  statusItems: Status[] = [this.status.sold, this.status.free, this.status.estimation, this.status.booked];
  isDisplayStatusMenu: boolean;

  onContextMenuClick() {
    this.isDisplayStatusMenu = true;
  }

  onStatusMenuClick(event:any, data: string): any {
    this.onStatusMenuItemClick.emit({
      event,
      data
    });
  }
}
