import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageRootComponent } from './homepage/homepage-root/homepage-root.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageRootComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
