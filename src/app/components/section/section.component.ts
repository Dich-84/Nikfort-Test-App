import { Floor } from './../../models/floor';
import { Section } from './../../models/section';
import { Component, Input } from '@angular/core';
import { nf_floor } from 'src/app/data/floors';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent {
  @Input() section: Section

  floors: Floor[] = nf_floor
}
