import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../cv.interface';

@Component({
  selector: 'rb-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[];
  constructor() {}

  ngOnInit() {}
}
