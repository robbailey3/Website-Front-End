import { MetaService } from 'src/app/shared/services/meta/meta.service';

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-root',
  templateUrl: './homepage-root.component.html',
  styleUrls: ['./homepage-root.component.scss']
})
export class HomepageRootComponent implements OnInit {
  constructor(private meta: MetaService) {}

  ngOnInit() {
    this.setMeta();
  }
  setMeta() {
    this.meta.setDescription(
      'This is the homepage of the London based Front End Developer Rob Bailey'
    );
    this.meta.setTitle('Rob Bailey: Front End Developer');
  }
}
