import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageRootComponent } from './homepage/homepage-root/homepage-root.component';
import { BlogRootComponent } from './blog/blog-root/blog-root.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { ContactComponent } from './contact/contact.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageRootComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'blog',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
