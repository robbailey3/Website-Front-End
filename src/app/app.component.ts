import { Component, Host, HostListener, OnInit } from '@angular/core';
import { MetaService } from './shared/services/meta/meta.service';

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
  /**
   * The current title `<title>` set in the `<head>` of the
   * document. This is used to store the previous title so that
   * when the user re-opens the tab, the title goes back to what
   * it was before.
   */
  public title: string;

  constructor(private meta: MetaService) {
    this.meta.$title.subscribe((title: string) => {
      this.title = title;
    });
  }

  public ngOnInit() {
    window.dataLayer = window.dataLayer || [];
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('referrer')) {
      window.dataLayer.push({ referrer: urlParams.get('referrer') });
    }
    this.title = this.meta.getTitle();
  }

  @HostListener('window:blur')
  public onblur() {
    const title = '👋 👀';
    this.meta.setTitle(title, false);
  }

  @HostListener('window:focus')
  public onfocus() {
    this.meta.setTitle(this.title);
  }
}
