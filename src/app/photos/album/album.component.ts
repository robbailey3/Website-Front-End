import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';
import { Photo } from '../photo.interface';
import { ImageCacheService } from '../image-cache.service';

@Component({
  selector: 'rb-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private service: PhotosService, private cache: ImageCacheService) { }
  data: Photo[];
  @ViewChildren('lazyLoad') images: QueryList<ElementRef>;
  ngOnInit() {
    this.getIDFromRoute();
  }
  ngAfterViewInit(): void {
    // this.images.changes
    //   .subscribe(() => this.lazyLoad());
  }
  getIDFromRoute(): void {
    this.route.paramMap.subscribe((route) => {
      const id = +route['params']['id'];
      if (id) {
        this.getData(id);
      }
    });
  }
  getData(id: number) {
    this.service.getAlbumByID(id).subscribe((data) => {
      this.data = data.response.results as Photo[];
      this.data.map((photo) => {
        if (photo.exif !== '') {
          photo.exif = JSON.parse(photo.exif);
          photo.aspectRatio = photo.exif.COMPUTED['Width'] / photo.exif.COMPUTED['Height'];
        }
        return photo;
      })
      this.loadImages();
    });
  }
  loadImages() {
    this.data.forEach((photo) => {
      this._loadImage(photo);
    });
  }
  private _loadImage(photo: Photo): void {
    this.cache.load(photo);
  }
  lazyLoad() {
    const lazyImages = this.images;
    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target['src'] = entry.target['dataset']['src'];
            entry.target.classList.remove('lazyLoad');
            lazyImageObserver.unobserve(entry.target);
          }
        });
      });
      lazyImages.forEach((lazyImage) => {
        lazyImageObserver.observe(lazyImage.nativeElement);
      });
    } else {
      this.images.forEach((img) => {
        img.nativeElement.src = img.nativeElement['dataset']['src'];
        img.nativeElement.classList.remove('lazyLoad');
      });
    }
  }
}
