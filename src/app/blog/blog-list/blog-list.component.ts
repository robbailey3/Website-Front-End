import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ErrorHandlerService } from 'src/app/error-handler/error-handler.service';
import { Post } from '../post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts: Post[];
  constructor(
    private service: BlogService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.service.getAllPosts().subscribe(
      res => {
        this.posts = res.response.results.map(post => {
          post.tags = (<string>post.categories).split(',');
          return post;
        }) as Post[];
      },
      err => {
        this.errorHandler.postError(err);
      }
    );
  }
}
