import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv-root',
  templateUrl: './cv-root.component.html',
  styleUrls: ['./cv-root.component.scss']
})
export class CvRootComponent implements OnInit {
  cv: JSON;
  constructor(private service: CvService) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getCV().subscribe(
      data => {
        this.cv = data;
      },
      err => {
        this.reportError(err);
      }
    );
  }
  reportError($error) {}
}
