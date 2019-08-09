import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() experience: Object;
  constructor() {}
}
