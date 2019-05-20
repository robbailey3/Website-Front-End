import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { fadeInLeft } from '../shared/animations/';
import { ContactService } from '../shared/services/contact/contact.service';
import { MetaService } from '../shared/services/meta/meta.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInLeft]
})
export class ContactComponent implements OnInit {
  public formSubmitted = false;
  public names = [
    'Marie Curie',
    'Nikola Tesla',
    'Albert Einstein',
    'Yoshi McIntyre',
    'Batman',
    'Margaret Hamilton'
  ];
  public randomName = this.names[Math.floor(Math.random() * this.names.length)];
  constructor(
    private service: ContactService,
    private meta: MetaService,
    private errorService: ErrorHandlerService
  ) {}
  private sendMail(data: JSON | FormData) {
    this.service.sendMail(data).subscribe(
      res => {},
      err => {
        this.handleError(err);
      }
    );
  }
  ngOnInit() {
    this.setMeta();
  }
  formSubmit(data: JSON) {
    console.log(data);
    this.formSubmitted = true;
    this.sendMail(data);
  }
  setMeta() {
    this.meta.setTitle('Rob Bailey: Contact Me');
    this.meta.setDescription('The contact page of Rob Bailey.');
  }
  handleError($e) {
    this.errorService.postError($e);
  }
}
