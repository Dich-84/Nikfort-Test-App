import { DataService } from 'src/app/services/data.service';
import { Floor } from '../../../models/floor';
import { Section } from '../../../models/section';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnChanges {

  constructor(private dataService: DataService) {  
  }

  @Input() section: Section;
  @Input() sectionID: string;
  
  floors: Floor[] = this.dataService.floors$;
  
  numbersOnFloor: number[] = [];

  ngOnChanges(): void {
    this.countNumbersOnFloor();
  }
  
  countNumbersOnFloor(): void {
    let floors = this.floors.filter(f => f.nf_sectionid === this.sectionID);
    for (let i = 0; i < floors[0].nf_maxnumberonfloor; i++) {
      this.numbersOnFloor.push(i + 1);
    }
  }
}
