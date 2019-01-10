import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageRootComponent } from './homepage-root.component';
import { IntroductionComponent } from '../introduction/introduction.component';

describe('HomepageRootComponent', () => {
  let component: HomepageRootComponent;
  let fixture: ComponentFixture<HomepageRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageRootComponent, IntroductionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
