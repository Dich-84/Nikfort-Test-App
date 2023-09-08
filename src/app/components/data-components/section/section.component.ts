import { Floor } from '../../../models/floor';
import { Section } from '../../../models/section';
import { Component, Input, OnChanges } from '@angular/core';
import { nf_floor } from 'src/app/data/floors';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnChanges {
  
  @Input() section: Section;
  @Input() sectionID: string;
  
  floors: Floor[] = nf_floor;
  
  numbersOnFloor: number[] = [];

  ngOnChanges() {
    this.countNumbersOnFloor()
  };
  
  countNumbersOnFloor(): void {
    let floors = this.floors.filter(f => f.nf_sectionid === this.sectionID);
    for (let i = 0; i < floors[0].nf_maxnumberonfloor; i++) {
      this.numbersOnFloor.push(i + 1);
    }
  };
}
