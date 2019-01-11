import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageRootComponent } from './homepage/homepage-root/homepage-root.component';
import { BlogRootComponent } from './blog/blog-root/blog-root.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageRootComponent },
  {
    path: 'blog',
    component: BlogRootComponent,
    children: [{ path: '', pathMatch: 'full', component: BlogListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
