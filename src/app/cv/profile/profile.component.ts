import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ProfileComponent {
  @Input() cv: object;
  constructor() {}
}
