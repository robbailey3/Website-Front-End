import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosRootComponent } from './photos-root/photos-root.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosRootComponent,
    children: [
      { path: '', pathMatch: 'full', component: AlbumsComponent },
      { path: ':id', pathMatch: 'full', component: AlbumComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule {}
