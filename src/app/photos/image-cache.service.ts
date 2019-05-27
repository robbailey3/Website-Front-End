import { Injectable } from '@angular/core';

import { Photo } from './photo.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageCacheService {
  private imageCache = [];
  constructor() {}
  private addImgToCache(img: HTMLImageElement) {
    this.imageCache[img.src] = img;
  }
  load(path: string): Promise<null> {
    return new Promise((resolve, reject) => {
      if (this.imageCache[path]) {
        resolve();
      }
      const img = new Image();
      img.onload = () => {
        this.addImgToCache(img);
        resolve();
      };
      img.onerror = (err: any) => {
        reject(img.src);
      };
      img.src = path;
    });
  }
  loadAll(photos: Photo[]) {
    const promises = [];
    photos.forEach((photo: Photo) => {
      promises.push(this.load(photo.path));
    });
    return Promise.all(promises);
  }
}
