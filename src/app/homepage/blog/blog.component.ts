import { BlogService } from 'src/app/blog/blog.service';
import { Post } from 'src/app/blog/post';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[];
  constructor(private service: BlogService) {}

  ngOnInit() {
    this.getBlogPosts();
  }
  getBlogPosts() {
    this.service.getNPosts(2).subscribe(response => {
      this.posts = response.response.results.map(post => {
        post.tags = post.categories.split(',');
        return post;
      }) as Post[];
      console.log(this.posts);
    });
  }
}
