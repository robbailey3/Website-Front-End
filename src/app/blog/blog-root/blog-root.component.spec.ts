import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRootComponent } from './blog-root.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('BlogRootComponent', () => {
  let component: BlogRootComponent;
  let fixture: ComponentFixture<BlogRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BlogRootComponent],
      providers: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
