import { Vector } from './vector';
import { Canvas } from './canvas';

export class Particle {
  private radius = 3;
  constructor(
    public position: Vector,
    public velocity: Vector,
    private canvas: Canvas
  ) {}

  public move() {
    this.position = this.position.add(this.velocity);
  }

  public draw() {
    this.canvas.drawCircle(
      this.position.x,
      this.position.y,
      this.radius,
      'rgba(255,255,255,0.2)'
    );
  }
}
