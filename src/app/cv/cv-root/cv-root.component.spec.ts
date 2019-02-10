import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvRootComponent } from './cv-root.component';

describe('CvRootComponent', () => {
  let component: CvRootComponent;
  let fixture: ComponentFixture<CvRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
