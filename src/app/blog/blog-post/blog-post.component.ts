import { MetaService } from './../../shared/services/meta/meta.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse } from './../../shared/interfaces/api-response.interface';
import { BlogService } from '../blog.service';
import { Post } from '../post';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit {
  slug: string;
  post: Post;
  description = `
<p>this is an example</p>
<pre class="prettyprint">
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
</pre>
`;
  response: HighlightResult;
  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private meta: MetaService
  ) {}

  ngOnInit(): void {
    this.getPostSlug();
  }
  getPostSlug() {
    this.route.paramMap.subscribe((params: Params) => {
      this.getData(params.get('slug'));
    });
  }
  getData(slug) {
    return this.service
      .getPostBySlug(slug)
      .subscribe((response: APIResponse) => {
        this.post = response.response.results as Post;
        this.post.tags = (<string>this.post.categories).split(',');
        this.setMeta();
      });
  }
  setMeta() {
    this.meta.setTitle(`${this.post.title}`);
    this.meta.setDescription(`${this.post.description}`);
  }
}
