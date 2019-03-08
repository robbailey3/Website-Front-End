import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosRootComponent } from './photos-root.component';

describe('PhotosRootComponent', () => {
  let component: PhotosRootComponent;
  let fixture: ComponentFixture<PhotosRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
