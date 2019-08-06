import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  {
    path: '',
    component: BlogRootComponent,
    children: [
      { path: '', pathMatch: 'full', component: BlogListComponent },
      {
        path: ':slug',
        component: BlogPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
