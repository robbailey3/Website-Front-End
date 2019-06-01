import { APIResponse } from './../../../../../backend/src/app/shared/interfaces/api-response';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ImageCacheService } from '../image-cache.service';
import { Photo } from '../photo.interface';
import { PhotosService } from '../photos.service';

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
    desktopRowHeight: 500,
    mobileRowHeight: 300,
    imageMargins: 1
  };
  rows: object[];
  photos = [];
  activePhoto: Photo;
  exifActive = false;
  constructor(
    private route: ActivatedRoute,
    private service: PhotosService,
    private cache: ImageCacheService,
    private renderer: Renderer2
  ) {}
  /**
   * @description Method which is called when the component is initiated.
   */
  ngOnInit() {
    this.getIDFromRoute();
    this.renderer.listen('document', 'keydown', ($event: KeyboardEvent) => {
      if (this.activePhoto) {
        if ($event.key === 'ArrowRight') {
          this.nextPhoto();
        }
        if ($event.key === 'ArrowLeft') {
          this.prevPhoto();
        }
      }
    });
  }
  /**
   * @description Method which is called after the view has initialised.
   */
  ngAfterViewInit(): void {
    this.renderedImages.changes.subscribe(() => this.lazyLoad());
  }
  /**
   * @description Get the route parameters and use the ID to get data from the server.
   */
  getIDFromRoute(): void {
    this.route.paramMap.subscribe((route: ParamMap) => {
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
      (data: APIResponse) => {
        this.data = data.response.results as Photo[];
        this.data.map((photo: Photo) => {
          if (
            photo.exif !== '' &&
            photo.exif !== undefined &&
            photo.exif !== null &&
            photo.exif !== '""'
          ) {
            // If the exif data for the file exists (which it should), parse it and work out the aspect ratio.
            photo.exif = JSON.parse(photo.exif);
            this.cleanExifData(photo);
            photo.aspectRatio =
              photo.exif.COMPUTED['Width'] / photo.exif.COMPUTED['Height'];
          }
          return photo;
        });
        this.preLoadImages();
        this.setAspectRatio();
        this.setPhotoLayout();
      },
      (err: any) => {
        this.handleError(err);
      }
    );
  }
  /**
   * @description Start loading the images
   */
  preLoadImages() {
    this.cache.loadAll(this.data);
  }
  setActivePhoto(i: number) {
    this.activePhoto = this.data[i];
  }
  nextPhoto(): void {
    let index = this.data.indexOf(this.activePhoto) + 1;
    index = index > this.data.length - 1 ? 0 : index;
    this.activePhoto = this.data[index];
  }
  prevPhoto(): void {
    let index = this.data.indexOf(this.activePhoto) - 1;
    index = index < 0 ? this.data.length - 1 : index;
    this.activePhoto = this.data[index];
  }
  fullScreenClose() {
    this.activePhoto = null;
  }
  private lazyLoad() {
    const lazyImages = this.renderedImages;
    if ('IntersectionObserver' in window) {
      // If the browser supports this
      const lazyImageObserver = new IntersectionObserver((entries: any) => {
        entries.forEach((entry: any) => {
          // TODO: Come up with a way to only change to the big source if it has been pre-loaded.
          if (entry.isIntersecting) {
            this.cache
              .load(entry.target['dataset']['src'])
              .then(() => {
                entry.target['src'] = entry.target['dataset']['src'];
                entry.target.classList.remove('lazy-load');
                lazyImageObserver.unobserve(entry.target);
              })
              .catch((path: string) => {
                // If the photo failed to load. Just remove it to avoid any dodgy stuff.
                this.data = this.data.filter((photo: Photo) => {
                  return photo.path !== path;
                });
              });
          }
        });
      });
      lazyImages.forEach((lazyImage: ElementRef) => {
        lazyImageObserver.observe(lazyImage.nativeElement);
      });
    } else {
      // If the browser doesn't support it, let them deal with slower loading times.
      this.renderedImages.forEach((img: any) => {
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
    this.data.forEach((photo: Photo) => {
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
      this.rows.forEach((r: any) => {
        r.forEach((ph: Photo) => {
          ph['height'] = Math.min(
            r['height'] - 2 * this.config.imageMargins,
            500
          );
          ph['width'] = ph['height'] * ph['aspectRatio'];
          this.photos.push(ph);
        });
      });
    });
  }
  private calculateAverageAspect() {
    let i = 0;
    let sum = 0;
    this.rows.forEach((row: any) => {
      sum += row['height'];
      i += 1;
    });
    return sum / i;
  }
  private cleanExifData(photo: Photo) {
    for (const key in photo.exif) {
      if (photo.exif.hasOwnProperty(key)) {
        switch (key) {
          case 'ExposureTime':
            photo.exif['ExposureTime'] = this.convertRationalToDecimal(
              photo.exif['ExposureTime'],
              true
            );
            break;
          case 'FocalLength':
            photo.exif['FocalLength'] = this.convertRationalToDecimal(
              photo.exif['FocalLength']
            );
            break;
          case 'DateTimeOriginal':
            const str = photo.exif['DateTimeOriginal'].split(' ');
            const dateStr = str[0].replace(/:/g, '-');
            photo.exif['DateTimeOriginal'] = new Date(`${dateStr} ${str[1]}`);
            break;
          default:
            break;
        }
      }
    }
  }
  handlePrevNext(val: string) {
    if (val === 'prev') {
      this.prevPhoto();
    } else {
      this.nextPhoto();
    }
  }
  private convertRationalToDecimal(rational: string, oneOver = false) {
    const numerator = parseInt(rational.split('/')[0], 10);
    const denominator = parseInt(rational.split('/')[1], 10);

    return oneOver
      ? `1/${Math.round(1 / (numerator / denominator))}`
      : numerator / denominator;
  }
  private handleError(err: Error) {
    
  }
}
