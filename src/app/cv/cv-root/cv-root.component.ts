import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { ErrorHandlerService } from 'src/app/error-handler/error-handler.service';
import { CV } from '../cv.interface';
import { MetaService } from 'src/app/shared/services/meta/meta.service';

@Component({
  selector: 'app-cv-root',
  templateUrl: './cv-root.component.html',
  styleUrls: ['./cv-root.component.scss']
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
      data => {
        this.cv = data as CV;
        if (environment.debug) {
          console.log(this.cv);
        }
      },
      err => {
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
