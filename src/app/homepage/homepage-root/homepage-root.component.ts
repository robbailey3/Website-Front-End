import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage-root',
  templateUrl: './homepage-root.component.html',
  styleUrls: ['./homepage-root.component.scss']
})
export class HomepageRootComponent implements OnInit {
  @HostListener('window:mousewheel', ['$event']) onScroll($event) {}
  constructor() {}

  ngOnInit() {}
}
