import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  private posts: Object[];
  constructor(private service: BlogService) {}

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.service.getAllPosts().then(res => {
      this.posts = res['response']['results'];
    });
  }
}
