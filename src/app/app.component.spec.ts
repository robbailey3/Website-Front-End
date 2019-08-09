import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { FooterComponent } from './global/footer/footer.component';
import { NavigationComponent } from './global/navigation/navigation.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      providers: [HttpClientModule],
      declarations: [AppComponent, NavigationComponent, FooterComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.debugElement.nativeElement;
  });

  it('should contain the Navigation component', () => {
    expect(compiled.querySelector('rb-navigation')).toBeDefined();
  });
  it('should contain the router-outlet', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('rb-navigation')).toBeDefined();
  });
});
