import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './global/navigation/navigation.component';
import { ComponentInstance } from '@angular/core/src/render3/interfaces/player';
import { detectChanges } from '@angular/core/src/render3';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: ComponentInstance;
  let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavigationComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should contain the Navigation component', () => {
    expect(compiled.querySelector('app-navigation')).toBeDefined();
  });
  it('should contain the router-outlet', () => {
    fixture.detectChanges();
    console.log(compiled);
    expect(compiled.querySelector('app-navigation')).toBeDefined();
  });
});
