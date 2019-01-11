import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  exports: [NavigationComponent, FooterComponent],
  imports: [CommonModule, RouterModule]
})
export class GlobalModule {}
