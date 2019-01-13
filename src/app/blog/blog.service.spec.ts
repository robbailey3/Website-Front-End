import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';

describe('BlogService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });
});
