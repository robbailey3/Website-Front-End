import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../photo.interface';
import { fadeInLeft } from '../../shared/animations/';

@Component({
  selector: 'rb-fullscreen-image',
  templateUrl: './fullscreen-image.component.html',
  styleUrls: ['./fullscreen-image.component.scss'],
  animations: [fadeInLeft]
})
export class FullscreenImageComponent {
  @Input() photo: Photo;
  @Output() prevNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  public exifActive = false;
  public sharingActive = false;

  constructor() {}
  closeFullscreen() {
    this.close.emit();
  }
  toggleExif() {
    this.exifActive = !this.exifActive;
  }
  prevPhoto() {
    this.prevNext.emit('prev');
  }
  nextPhoto() {
    this.prevNext.emit('next');
  }
  sharePhoto() {
    this.sharingActive = true;
  }
  closeSharer() {
    this.sharingActive = false;
  }
  hasExif() {
    return (
      this.photo.exif !== undefined &&
      this.photo.exif !== null &&
      this.photo.exif !== '' &&
      this.photo.exif !== '""'
    );
  }
}
