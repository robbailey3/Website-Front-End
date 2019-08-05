import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { HighlightService } from '../../shared/services/highlight/highlight.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}
  ngAfterViewChecked() {}
}
