import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RouterModule } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { DisqusModule } from 'ngx-disqus';

import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ];
}
@NgModule({
  declarations: [BlogRootComponent, BlogListComponent, BlogPostComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    HighlightModule.forRoot({ languages: hljsLanguages }),
    DisqusModule.forRoot('robbailey3')
  ],
  providers: [BlogService]
})
export class BlogModule {}
