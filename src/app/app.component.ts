import { Component, OnInit } from '@angular/core';

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
  ngOnInit() {
    window.dataLayer = window.dataLayer || [];
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('referrer')) {
      window.dataLayer.push({ referrer: urlParams.get('referrer') });
    }
  }
}
