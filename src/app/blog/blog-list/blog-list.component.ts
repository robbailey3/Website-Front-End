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
        this.posts = res.response.results as Post[];
        this.posts.map(
          post => (post.categories = (<string>post.categories).split(','))
        );
      },
      err => {
        this.errorHandler.postError(err);
      }
    );
  }
}
