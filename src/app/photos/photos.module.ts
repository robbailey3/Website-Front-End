import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRootComponent } from './photos-root/photos-root.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PhotosRootComponent, AlbumsComponent, AlbumComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PhotosModule { }
