import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../photos.service';

@Component({
  selector: 'rb-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: any;

  constructor(private service: PhotosService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getAlbums()
      .subscribe((data) => {
        this.albums = data.response.results;
        console.log(this.albums);
      });
  }

}
