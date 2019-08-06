import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { ParticleVisualisation } from './particle-visualisation/src/particle-visualisation';

@Component({
  selector: 'rb-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {
  constructor() {}
  /**
   * The canvas element onto which the particles thingy can
   * be added.
   */
  @ViewChild('canvas', { static: true }) canvasEl: ElementRef;
  private particleVisualisation: ParticleVisualisation;
  @HostListener('mousedown') onmousedown() {
    this.particleVisualisation.isClicking = true;
  }
  @HostListener('mousemove', ['$event']) onmousemove($event: MouseEvent) {
    this.debounce(() => {
      this.particleVisualisation.handleMouseOver($event.pageX, $event.pageY);
    }, 200)();
  }
  @HostListener('mouseup') onmouseup() {
    this.particleVisualisation.isClicking = false;
  }
  @HostListener('window:resize') onresize() {
    console.log(window.innerHeight);
    this.particleVisualisation.canvas.setCanvasSize({
      width: document.body.clientWidth,
      height: window.innerHeight - 54
    });
  }
  ngOnInit() {
    this.particleVisualisation = new ParticleVisualisation(
      this.canvasEl.nativeElement,
      { width: document.body.clientWidth, height: window.innerHeight - 54 }
    );
  }
  debounce<F extends (...args: any[]) => void>(
    f: F,
    timeout: number,
    target?: any
  ): F {
    let timer: any | undefined = null;
    return function(this: any, ...args: any[]) {
      target = target || this;

      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        f.apply(target, args);
      }, timeout);
    } as F;
  }
}
