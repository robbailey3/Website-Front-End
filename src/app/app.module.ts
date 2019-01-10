import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { GlobalModule } from './global/global.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GlobalModule, HomepageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
