import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../cv.interface';

@Component({
  selector: 'rb-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills: Skill[];
  ngOnInit(): void {
    this.skills.forEach((skillCategory) => {
      skillCategory.categorySkills.sort(
        (a, b) => b.skillRating - a.skillRating
      );
    });
  }
}
