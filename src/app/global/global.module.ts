import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CookieComponent } from './cookie/cookie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationComponent, FooterComponent, CookieComponent],
  exports: [NavigationComponent, FooterComponent, CookieComponent],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule]
})
export class GlobalModule {}
