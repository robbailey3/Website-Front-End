import { CanvasDimensions } from './canvas-dimensions';
import { Vector } from './vector';

export class Canvas {
  private ctx: CanvasRenderingContext2D;
  private config = {
    backgroundColor: 'rgba(27, 27, 30, 1)',
    strokeColor: '#fff'
  };
  constructor(public canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d');
  }

  public clearBackground() {
    this.ctx.save();
    this.ctx.fillStyle = this.config.backgroundColor;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.closePath();
    this.ctx.restore();
  }

  public setCanvasSize(dimensions: CanvasDimensions) {
    this.canvas.width = dimensions.width;
    this.canvas.height = dimensions.height;
  }

  public drawCircle(
    x: number,
    y: number,
    radius: number,
    fillColor: string = '#fff'
  ) {
    this.ctx.save();
    this.ctx.fillStyle = fillColor;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }
  public drawLine(
    from: Vector,
    to: Vector,
    color: string = this.config.strokeColor
  ) {
    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
    this.ctx.restore();
  }
}
