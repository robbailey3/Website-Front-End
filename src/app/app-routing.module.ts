import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageRootComponent } from './homepage/homepage-root/homepage-root.component';
import { BlogRootComponent } from './blog/blog-root/blog-root.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { ContactComponent } from './contact/contact.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { CvRootComponent } from './cv/cv-root/cv-root.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PhotosRootComponent } from './photos/photos-root/photos-root.component';
import { AlbumsComponent } from './photos/albums/albums.component';
import { AlbumComponent } from './photos/album/album.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageRootComponent,
    data: { state: 'home' }
  },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  {
    path: 'blog',
    component: BlogRootComponent,
    children: [
      { path: '', pathMatch: 'full', component: BlogListComponent },
      {
        path: ':slug',
        component: BlogPostComponent
      }
    ]
  },
  { path: 'cv', component: CvRootComponent },
  { path: 'about', component: AboutMeComponent },
  {
    path: 'photos',
    component: PhotosRootComponent,
    children: [
      { path: '', pathMatch: 'full', component: AlbumsComponent },
      { path: ':id', pathMatch: 'full', component: AlbumComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
