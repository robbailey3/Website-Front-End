import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  @Input() interests: object;
}
