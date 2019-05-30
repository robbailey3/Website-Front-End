import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../photo.interface';

interface Navigator {
  clipboard: any;
}

@Component({
  selector: 'rb-image-share',
  templateUrl: './image-share.component.html',
  styleUrls: ['./image-share.component.scss']
})
export class ImageShareComponent implements OnInit {
  @Input() photo: Photo;
  @Input() active = false;
  @Output() close: EventEmitter<void> = new EventEmitter();
  showCopySuccess = false;
  timeout: any;
  constructor() {}

  ngOnInit() {}
  closeModal() {
    this.active = false;
    this.close.emit();
  }
  copyPathToClipboard() {
    if ('navigator' in window) {
      if ('clipboard' in window.navigator) {
        (window.navigator as Navigator).clipboard
          .writeText(this.photo.path)
          .then((res: any) => {
            this.displayCopiedTooltip();
          })
          .catch((err: any) => console.error(err));
      }
    }
  }
  displayCopiedTooltip() {
    this.showCopySuccess = true;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.showCopySuccess = false;
    },                        2000);
  }
}
