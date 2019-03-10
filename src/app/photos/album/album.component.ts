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
  aspectRatio: number;
  config = {
    desktopRowHeight: 300,
    mobileRowHeight: 200,
    imageMargins: 2
  };
  rows: object[];
  photos = [];
  @ViewChildren('lazyLoad') images: QueryList<ElementRef>;
  ngOnInit() {
    this.getIDFromRoute();
  }
  ngAfterViewInit(): void {
    this.images.changes
      .subscribe(() => this.lazyLoad());
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
      this.setAspectRatio();
      this.setPhotoLayout();
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
  private lazyLoad() {
    const lazyImages = this.images;
    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target['src'] = entry.target['dataset']['src'];
            entry.target.classList.remove('lazy-load');
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
        img.nativeElement.classList.remove('lazy-load');
      });
    }
  }
  private setAspectRatio() {
    if (window.innerWidth >= 768) {
      this.aspectRatio = window.innerWidth / this.config.desktopRowHeight;
    } else {
      this.aspectRatio = window.innerWidth / this.config.mobileRowHeight;
    }
  }
  private setPhotoLayout() {
    this.rows = [];
    let rowAspectRatio = 0;
    let row = [];
    let photoIndex = 0;
    this.data.forEach((photo) => {
      photoIndex++;
      rowAspectRatio += photo.aspectRatio;
      row.push(photo);
      if (rowAspectRatio >= this.aspectRatio) {
        row['height'] = (window.innerWidth - 20) / rowAspectRatio;
        this.rows.push(row);
        row = [];
        rowAspectRatio = 0;
      } else if (photoIndex === this.data.length) {
        row['height'] = this.calculateAverageAspect();
        this.rows.push(row);
        row = [];
        rowAspectRatio = 0;
      }
      this.photos = [];
      this.rows.forEach((el: any) => {
        el.forEach((photo: Photo) => {
          photo['height'] = Math.min(el['height'] - (2 * this.config.imageMargins), 500);
          photo['width'] = photo['height'] * photo['aspectRatio'];
          this.photos.push(photo);
        });
      });
    });
  }
  private calculateAverageAspect() {
    let i = 0,
      sum = 0;
    this.rows.forEach(row => {
      sum += row['height'];
      i++;
    });
    return sum / i;
  }
}
