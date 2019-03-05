import { Component, OnInit, HostListener } from '@angular/core';
import { MetaService } from 'src/app/shared/services/meta/meta.service';

@Component({
  selector: 'app-homepage-root',
  templateUrl: './homepage-root.component.html',
  styleUrls: ['./homepage-root.component.scss']
})
export class HomepageRootComponent implements OnInit {
  // @HostListener('window:mousewheel', ['$event']) onScroll($event) {}
  constructor(private meta: MetaService) {}

  ngOnInit() {
    this.setMeta();
  }
  setMeta() {
    this.meta.setDescription('foo--baer');
  }
}
