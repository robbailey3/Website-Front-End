import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from '../hero/hero.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { SkillsComponent } from '../skills/skills.component';
import { HomepageRootComponent } from './homepage-root.component';

describe('HomepageRootComponent', () => {
  let component: HomepageRootComponent;
  let fixture: ComponentFixture<HomepageRootComponent>;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomepageRootComponent,
        IntroductionComponent,
        HeroComponent,
        SkillsComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageRootComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain the hero component', () => {
    expect(compiled.querySelector('rb-hero')).toBeDefined();
  });
});
