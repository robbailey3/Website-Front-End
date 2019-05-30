import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosRootComponent } from './photos-root/photos-root.component';
import { FullscreenImageComponent } from './fullscreen-image/fullscreen-image.component';
import { ImageShareComponent } from './image-share/image-share.component';

@NgModule({
  declarations: [PhotosRootComponent, AlbumsComponent, AlbumComponent, FullscreenImageComponent, ImageShareComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PhotosModule { }
