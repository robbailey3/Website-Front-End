import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'rb-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PhotosService) { }
  data: any;
  photos: HTMLImageElement[] = [];
  thumbnails: HTMLImageElement[];
  ngOnInit() {
    this.getIDFromRoute();
  }
  getIDFromRoute(): void {
    this.route.paramMap.subscribe((route) => {
      const id = +route['params']['id'];
      if (id) {
        this.getData(id);
      }
    });
  }
  getData(id: number) {
    this.service.getAlbumByID(id).subscribe((data) => {
      this.data = data.response.results;
      this.loadThumbnails();
      this.loadImages();
    });
  }
  loadImages() {

  }
  loadThumbnails() { }

}
