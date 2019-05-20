import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me.component';

@NgModule({
  declarations: [AboutMeComponent],
  exports: [AboutMeComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutMeModule { }
