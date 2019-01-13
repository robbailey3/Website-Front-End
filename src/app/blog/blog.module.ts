import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RouterModule } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BlogRootComponent, BlogListComponent, BlogPostComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [BlogService]
})
export class BlogModule {}
