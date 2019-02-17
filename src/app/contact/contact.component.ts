import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private service: ContactService) {}
  sendMail(data: JSON | FormData) {
    this.service.sendMail(data).subscribe();
  }
  formChange(foo: any) {
    console.log(foo);
  }
}
