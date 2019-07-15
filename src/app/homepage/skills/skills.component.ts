import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { HighlightService } from '../../shared/services/highlight/highlight.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewChecked {
  private highlighted = false;
  constructor(private highlightService: HighlightService) {}

  ngOnInit() {}
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
