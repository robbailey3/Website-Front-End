import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RouterModule } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  declarations: [BlogRootComponent, BlogListComponent, BlogPostComponent],
  imports: [CommonModule, RouterModule]
})
export class BlogModule {}
