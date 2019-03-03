import { fadeInLeft } from './../shared/animations/';
import { Component } from '@angular/core';
import { ContactService } from '../shared/services/contact/contact.service';
import { ErrorHandlerService } from '../error-handler/error-handler.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInLeft]
})
export class ContactComponent {
  constructor(
    private service: ContactService,
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
  formSubmit(data) {
    console.log(data);
    this.sendMail(data);
  }
  handleError($e) {
    this.errorService.postError($e);
  }
}
