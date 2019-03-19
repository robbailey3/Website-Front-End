import { Component, OnInit, HostListener } from '@angular/core';
import { MetaService } from 'src/app/shared/services/meta/meta.service';

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
