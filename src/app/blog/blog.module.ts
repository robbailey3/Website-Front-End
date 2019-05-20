import { DisqusModule } from 'ngx-disqus';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [BlogRootComponent, BlogListComponent, BlogPostComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    DisqusModule.forRoot('robbailey3')
  ],
  providers: [BlogService]
})
export class BlogModule {}
