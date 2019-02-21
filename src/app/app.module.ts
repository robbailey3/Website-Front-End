import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { GlobalModule } from './global/global.module';
import { HomepageModule } from './homepage/homepage.module';
import { PhotosModule } from './photos/photos.module';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { CVModule } from './cv/cv.module';
@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    GlobalModule,
    HomepageModule,
    BlogModule,
    PhotosModule,
    ProjectsModule,
    HttpClientModule,
    FormsModule,
    ErrorHandlerModule,
    CVModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
