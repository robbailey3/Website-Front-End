import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() education: object;
}
