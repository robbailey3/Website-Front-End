import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Basics } from '../cv.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() cv: Basics;
  constructor() {}
}
