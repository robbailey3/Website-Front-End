import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRootComponent } from './homepage-root/homepage-root.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { SharedModule } from '../shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomepageRootComponent, IntroductionComponent, HeroComponent, SkillsComponent, BlogComponent],
  exports: [HomepageRootComponent],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class HomepageModule {}
