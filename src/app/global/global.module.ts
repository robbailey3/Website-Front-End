import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CookieComponent } from './cookie/cookie.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    CookieComponent,
    LoaderComponent
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    CookieComponent,
    LoaderComponent
  ],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule]
})
export class GlobalModule {}
