import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIResponse } from 'src/app/shared/interfaces/api-response.interface';
import { BlogService } from '../blog.service';
import { Post } from '../post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  slug: string;
  post: Post;
  constructor(private route: ActivatedRoute, private service: BlogService) {}

  ngOnInit(): void {
    this.getPostSlug();
  }
  getPostSlug() {
    this.route.paramMap.subscribe(params => {
      this.getData(params.get('slug'));
    });
  }
  getData(slug) {
    return this.service.getPostBySlug(slug).subscribe(response => {
      this.post = response.response.results as Post;
    });
  }
}
