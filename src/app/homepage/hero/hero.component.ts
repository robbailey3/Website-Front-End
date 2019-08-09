import { fallIn } from 'src/app/shared/animations';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [fallIn]
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
  scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}
