import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rb-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit {
  @Input() rating: number = 50;
  constructor() {}

  ngOnInit() {}
}
