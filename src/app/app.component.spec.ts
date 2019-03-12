import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './global/navigation/navigation.component';
import { ComponentInstance } from '@angular/core/src/render3/interfaces/player';
import { FooterComponent } from './global/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: ComponentInstance;
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
    expect(compiled.querySelector('app-navigation')).toBeDefined();
  });
});
