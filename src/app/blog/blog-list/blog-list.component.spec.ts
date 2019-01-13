import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListComponent } from './blog-list.component';
import { BlogService } from '../blog.service';
import { HttpClientModule } from '@angular/common/http';

describe('BlogListComponent', () => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogListComponent],
      imports: [HttpClientModule],
      providers: [BlogService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
