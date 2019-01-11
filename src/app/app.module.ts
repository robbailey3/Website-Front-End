import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GlobalModule,
    HomepageModule,
    BlogModule,
    PhotosModule,
    ProjectsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
