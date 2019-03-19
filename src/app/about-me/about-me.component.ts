import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageCacheService } from '../photos/image-cache.service';
import { MetaService } from '../shared/services/meta/meta.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  @ViewChild('image') image: ElementRef;
  constructor(private cache: ImageCacheService, private meta: MetaService) {}

  ngOnInit() {
    this.setMeta();
    this.cache.load('../../assets/me_round.png').then(() => {
      this.image.nativeElement.src = this.image.nativeElement.dataset['src'];
      this.image.nativeElement.classList.remove('lazyload');
    });
  }
  setMeta() {
    this.meta.setTitle('Rob Bailey: About Me');
    this.meta.setDescription('Information about Rob Bailey.');
  }
}
