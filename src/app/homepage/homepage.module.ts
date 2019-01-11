import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRootComponent } from './homepage-root/homepage-root.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [HomepageRootComponent, IntroductionComponent, HeroComponent, SkillsComponent],
  exports: [HomepageRootComponent],
  imports: [CommonModule]
})
export class HomepageModule {}
