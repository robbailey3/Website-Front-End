import { Photo } from './photo.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageCacheService {
  private imageCache = [];
  constructor() { }
  private addImgToCache(img: HTMLImageElement) {
    this.imageCache[img.src] = img;
  }
  load(photo: Photo): void {
    if (this.imageCache[photo.path]) {
      // Image has already been downloaded, no need to do anything.
      return;
    }
    const img = new Image();
    img.onload = () => {
      this.addImgToCache(img);
    }
    this.imageCache[photo.path] = false;
    img.src = photo.path;
  }
}
