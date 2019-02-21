import { fadeInLeft } from './../shared/animations/';
import { Component } from '@angular/core';
import { ContactService } from '../shared/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInLeft]
})
export class ContactComponent {
  constructor(private service: ContactService) {}
  sendMail(data: JSON | FormData) {
    this.service.sendMail(data).subscribe();
  }
  formSubmit(data) {
    console.log(data);
  }
}
