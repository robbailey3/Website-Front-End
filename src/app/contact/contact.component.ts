import { Component, OnInit } from '@angular/core';

import { fadeInLeft } from '../shared/animations/';
import { MetaService } from '../shared/services/meta/meta.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInLeft]
})
export class ContactComponent implements OnInit {
  constructor(private meta: MetaService) {}
  ngOnInit() {
    this.setMeta();
  }
  setMeta() {
    this.meta.setTitle('Rob Bailey: Contact Me');
    this.meta.setDescription('The contact page of Rob Bailey.');
  }
}
