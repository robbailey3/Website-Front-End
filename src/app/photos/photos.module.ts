import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosRootComponent } from './photos-root/photos-root.component';

@NgModule({
  declarations: [PhotosRootComponent, AlbumsComponent, AlbumComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PhotosModule { }
