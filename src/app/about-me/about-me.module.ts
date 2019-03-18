import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutMeComponent],
  exports: [AboutMeComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutMeModule { }
