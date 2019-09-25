import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../shared/animations/src/routerTransition';

@Component({
  selector: 'rb-photos-root',
  templateUrl: './photos-root.component.html',
  styleUrls: ['./photos-root.component.scss'],
  animations: [routerTransition]
})
export class PhotosRootComponent implements OnInit {
  @HostBinding('@routerTransition') transition;

  constructor() {}

  ngOnInit() {}
}
