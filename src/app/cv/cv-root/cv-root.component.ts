import { ErrorHandlerService } from 'src/app/error-handler/error-handler.service';
import { MetaService } from 'src/app/shared/services/meta/meta.service';

import {
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { routerTransition } from '../../shared/animations/src/routerTransition';
import { CV } from '../cv.interface';
import { CvService } from '../cv.service';

@Component({
  selector: 'rb-cv-root',
  templateUrl: './cv-root.component.html',
  styleUrls: ['./cv-root.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition]
})
export class CvRootComponent implements OnInit {
  /**
   * The binding for the router transition animation.
   */
  @HostBinding('@routerTransition') private transition;

  /**
   * The CV object from the JSON file.
   */
  public cv: CV;

  constructor(
    private service: CvService,
    private meta: MetaService,
    private errorService: ErrorHandlerService
  ) {}

  public ngOnInit() {
    this.getData();
    this.setMeta();
  }

  /**
   * Retrieve the data from the JSON file via
   * `CVService`
   */
  public getData() {
    this.service.getCV().subscribe(
      (data) => {
        this.cv = data as CV;
      },
      (err) => {
        this.reportError(err);
      }
    );
  }

  /**
   * Set the page metadata.
   */
  public setMeta() {
    this.meta.setTitle('Rob Bailey: Curriculum Vitae');
    this.meta.setDescription('The CV of the London based developer Rob Bailey');
  }

  /**
   *
   *
   * @param $error The error to report
   */
  public reportError($error: Error) {
    this.errorService.postError($error);
  }
}
