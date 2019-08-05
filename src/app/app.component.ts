import { Component, OnInit, HostListener, Host } from '@angular/core';
import { MetaService } from './shared/services/meta/meta.service';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

declare global {
  interface Window {
    dataLayer: any[];
  }
}
@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  constructor(private meta: MetaService) {
    this.meta.$title.subscribe((title: string) => {
      this.title = title;
      console.log(this.title);
    });
  }
  ngOnInit() {
    window.dataLayer = window.dataLayer || [];
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('referrer')) {
      window.dataLayer.push({ referrer: urlParams.get('referrer') });
    }
    this.title = this.meta.getTitle();
  }
  @HostListener('window:blur')
  onblur() {
    const title = 'Rob Bailey: 👋';
    this.meta.setTitle(title, false);
  }
  @HostListener('window:focus')
  onfocus() {
    this.meta.setTitle(this.title);
  }
}
