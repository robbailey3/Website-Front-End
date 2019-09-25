import { Component, HostBinding } from '@angular/core';
import { routerTransition } from '../../shared/animations/src/routerTransition';

@Component({
  selector: 'rb-blog-root',
  templateUrl: './blog-root.component.html',
  styleUrls: ['./blog-root.component.scss'],
  animations: [routerTransition]
})
export class BlogRootComponent {
  /**
   * The binding for the router transition animation.
   */
  @HostBinding('@routerTransition') private transition;
}
