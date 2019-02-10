import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvRootComponent } from './cv-root/cv-root.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CvRootComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    HobbiesComponent
  ],
  exports: [CvRootComponent],
  imports: [CommonModule, RouterModule]
})
export class CVModule {}
