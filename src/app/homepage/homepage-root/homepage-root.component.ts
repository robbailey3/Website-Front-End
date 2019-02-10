import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage-root',
  templateUrl: './homepage-root.component.html',
  styleUrls: ['./homepage-root.component.scss']
})
export class HomepageRootComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onScroll($event) {
    console.log($event);
  }
  constructor() {}

  ngOnInit() {}
}
