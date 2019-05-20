import { APIResponse } from '../../shared/interfaces/api-response.interface';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ErrorHandlerService } from '../../error-handler/error-handler.service';
import { Post } from '../post';
import { MetaService } from '../../shared/services/meta/meta.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts: Post[];
  constructor(
    private service: BlogService,
    private meta: MetaService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.getPosts();
    this.setMeta();
  }
  getPosts() {
    this.service.getAllPosts().subscribe(
      (res: APIResponse) => {
        this.posts = res.response.results.map((post: Post) => {
          post.tags = (<string>post.categories).split(',');
          return post;
        }) as Post[];
      },
      (err: any) => {
        this.errorHandler.postError(err);
      }
    );
  }
  setMeta() {
    this.meta.setTitle('Rob Bailey: Blog Posts');
  }
}
