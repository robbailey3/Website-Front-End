import { ErrorHandlerService } from 'src/app/error-handler/error-handler.service';
import { MetaService } from 'src/app/shared/services/meta/meta.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CV } from '../cv.interface';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv-root',
  templateUrl: './cv-root.component.html',
  styleUrls: ['./cv-root.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CvRootComponent implements OnInit {
  cv: CV;
  constructor(
    private service: CvService,
    private meta: MetaService,
    private errorService: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.getData();
    this.setMeta();
  }
  getData() {
    this.service.getCV().subscribe(
      (data) => {
        this.cv = data as CV;
      },
      (err) => {
        this.reportError(err);
      }
    );
  }
  setMeta() {
    this.meta.setTitle('Rob Bailey: Curriculum Vitae');
    this.meta.setDescription('The CV of the London based developer Rob Bailey');
  }
  reportError($error) {
    this.errorService.postError($error);
  }
}
