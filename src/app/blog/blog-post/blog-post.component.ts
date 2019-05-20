import { MetaService } from './../../shared/services/meta/meta.service';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewChecked
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse } from './../../shared/interfaces/api-response.interface';
import { BlogService } from '../blog.service';
import { Post } from '../post';
import { HighlightService } from 'src/app/shared/services/highlight/highlight.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit, AfterViewChecked {
  slug: string;
  post: Post;
  highlighted = false;
  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private meta: MetaService,
    private highlightService: HighlightService
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
  ngAfterViewChecked() {
    if (this.post && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
