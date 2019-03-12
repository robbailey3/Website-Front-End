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
  @ViewChildren('lazyLoad') renderedImages: QueryList<ElementRef>;

  data: Photo[];
  aspectRatio: number;
  config = {
    desktopRowHeight: 600,
    mobileRowHeight: 300,
    imageMargins: 2
  };
  rows: object[];
  photos = [];
  activePhoto: Photo;
  constructor(
    private route: ActivatedRoute,
    private service: PhotosService,
    private cache: ImageCacheService) { }
  /**
   * @description Method which is called when the component is initiated.
   */
  ngOnInit() {
    this.getIDFromRoute();
  }
  /**
   * @description Method which is called after the view has initialised.
   */
  ngAfterViewInit(): void {
    this.renderedImages.changes
      .subscribe(() => this.lazyLoad());
  }
  /**
   * @description Get the route parameters and use the ID to get data from the server.
   */
  getIDFromRoute(): void {
    this.route.paramMap.subscribe((route) => {
      const id = +route['params']['id'];
      if (id) {
        this.getData(id);
      }
    });
  }
  /**
   * @description Get the data from the database and fiddle with the data a bit.
   * @param id The ID of the photo album
   */
  getData(id: number) {
    this.service.getAlbumByID(id).subscribe(
      (data) => {
        this.data = data.response.results as Photo[];
        this.data.map((photo) => {
          if (photo.exif !== '') {
            // If the exif data for the file exists (which it should), parse it and work out the aspect ratio.
            photo.exif = JSON.parse(photo.exif);
            photo.aspectRatio = photo.exif.COMPUTED['Width'] / photo.exif.COMPUTED['Height'];
          }
          return photo;
        });
        this.preLoadImages();
        this.setAspectRatio();
        this.setPhotoLayout();
      },
      (err) => {
        this.handleError(err);
      });
  }
  /**
   * @description Start loading the images
   */
  preLoadImages() {
    this.cache.loadAll(this.data);
  }
  setActivePhoto(photo: Photo) {
    this.activePhoto = photo;
  }
  private lazyLoad() {
    const lazyImages = this.renderedImages;
    if ('IntersectionObserver' in window) { // If the browser supports this
      const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // TODO: Come up with a way to only change to the big source if it has been pre-loaded.
          if (entry.isIntersecting) {
            this.cache.load(entry.target['dataset']['src']).then(() => {
              // !ISSUE: This could lead to things being loaded twice (i.e. if a request is already underway).
              entry.target['src'] = entry.target['dataset']['src'];
              entry.target.classList.remove('lazy-load');
              lazyImageObserver.unobserve(entry.target);
            });
          }
        });
      });
      lazyImages.forEach((lazyImage) => {
        lazyImageObserver.observe(lazyImage.nativeElement);
      });
    } else {
      // If the browser doesn't support it, let them deal with slower loading times.
      this.renderedImages.forEach((img) => {
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
      photoIndex += 1;
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
    let i = 0;
    let sum = 0;
    this.rows.forEach((row) => {
      sum += row['height'];
      i += 1;
    });
    return sum / i;
  }
  private handleError(err: Error) {

  }
}
