import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'rb-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  photos: any;
  constructor(private route: ActivatedRoute, private service: PhotosService) { }

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
      this.photos = data.response.results;
    });
  }

}
