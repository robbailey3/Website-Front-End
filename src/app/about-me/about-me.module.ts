import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';

@NgModule({
  declarations: [AboutMeComponent],
  exports: [AboutMeComponent],
  imports: [
    CommonModule
  ]
})
export class AboutMeModule { }
