import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  age: number;
  constructor() {}
  ngOnInit() {
    this.calculateAge();
  }
  calculateAge() {
    const today = new Date();
    const birthday = new Date('1993-10-28');
    this.age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      this.age--;
    }
  }
}
