import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogRootComponent, BlogListComponent],
  imports: [CommonModule, RouterModule]
})
export class BlogModule {}
