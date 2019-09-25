import { Component, HostBinding, OnInit } from '@angular/core';

import { fadeInLeft } from '../shared/animations/';
import { routerTransition } from '../shared/animations/src/routerTransition';
import { MetaService } from '../shared/services/meta/meta.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInLeft, routerTransition]
})
export class ContactComponent implements OnInit {
  /**
   * The binding for the router transition.
   */
  @HostBinding('@routerTransition') transition;

  constructor(private meta: MetaService) {}

  ngOnInit() {
    this.setMeta();
  }

  /**
   * Set the meta data for this page
   */
  setMeta() {
    this.meta.setTitle('Rob Bailey: Contact Me');
    this.meta.setDescription('The contact page of Rob Bailey.');
  }
}
