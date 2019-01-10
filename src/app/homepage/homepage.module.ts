import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRootComponent } from './homepage-root/homepage-root.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [HomepageRootComponent, IntroductionComponent],
  exports: [HomepageRootComponent],
  imports: [CommonModule]
})
export class HomepageModule {}
