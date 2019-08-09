import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuActive = false;
  constructor() {}

  ngOnInit() {}

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }
}
