import { Building } from '../../../models/building';
import { nf_building } from '../../../data/buildings';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent {

  buildings: Building[] = nf_building

  showTab(evt: any, buildingName: string): void {
    let sections: any = document.getElementsByClassName('sections');
    for(let i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none'
    }

    let tablinks: any = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(buildingName)!.style.display = "flex"
    evt.currentTarget!.className += ' active'
  }
}
