import { CanvasDimensions } from './canvas-dimensions';
import { Canvas } from './canvas';
import { Particle } from './particle';
import { Vector } from './vector';

/**
 * TODO: Refactor this class to try and reduce the number of loops within the
 * code
 * This class controls the Particle Visualisation functionality (e.g. creating
 * the particles, moving them, handling clicks)
 */
export class ParticleVisualisation {
  public particles: Particle[] = [];
  public isClicking = false;
  private config = {
    canvasBackgroundColor: 'rgba(27, 27, 30, 1)',
    particleCount: 250,
    lineTolerance: 100
  };
  public canvas: Canvas;
  constructor(
    private hostElement: HTMLCanvasElement,
    private dimensions: CanvasDimensions
  ) {
    this.canvas = new Canvas(this.hostElement);
    this.canvas.setCanvasSize(this.dimensions);
    this.canvas.clearBackground();
    this.createParticles();
    this.animate();
  }
  public handleMouseOver(mouseX: number, mouseY: number) {
    if (!this.isClicking) {
      return;
    }
    const mousePositionVector = new Vector(mouseX, mouseY, 0);
    for (let i = 0; i < this.particles.length; i += 1) {
      const scalarDistanceBetween = Math.sqrt(
        Math.pow(this.particles[i].position.x - mousePositionVector.x, 2) +
          Math.pow(this.particles[i].position.y - mousePositionVector.y, 2)
      );

      const unitVectorBetween = mousePositionVector
        .minus(this.particles[i].position)
        .normalize();
      let force = unitVectorBetween.times(-10000 / scalarDistanceBetween ** 2);
      this.particles[i].velocity = this.particles[i].velocity.add(force);
    }
  }
  private createParticles() {
    for (let i = 0; i < this.config.particleCount; i += 1) {
      const position = new Vector(
        Math.floor(Math.random() * this.canvas.canvas.width),
        Math.floor(Math.random() * this.canvas.canvas.height),
        0
      );
      const randomX = Math.random() * 2 - 1;
      const randomY = Math.random() * 2 - 1;
      const velocity = new Vector(randomX, randomY, 0);
      this.particles.push(new Particle(position, velocity, this.canvas));
    }
  }
  private drawParticleLines() {
    for (let a of this.particles) {
      for (let b of this.particles) {
        if (a === b) {
          continue;
        }
        const scalarDistanceBetween = a.position.minus(b.position).magnitude();
        if (scalarDistanceBetween < this.config.lineTolerance) {
          this.canvas.drawLine(a.position, b.position, 'rgba(255,255,255,0.2)');
        }
      }
    }
  }
  private checkBounds(particle: Particle) {
    if (
      particle.position.x < 0 ||
      particle.position.x > this.canvas.canvas.width ||
      particle.position.y < 0 ||
      particle.position.y > this.canvas.canvas.height
    ) {
      particle.position = new Vector(
        Math.floor(Math.random() * this.canvas.canvas.width),
        Math.floor(Math.random() * this.canvas.canvas.height),
        0
      );
      const randomX = Math.random() * 2 - 1;
      const randomY = Math.random() * 2 - 1;
      particle.velocity = new Vector(randomX, randomY, 0);
      return;
    }
  }
  private animate() {
    this.canvas.clearBackground();
    this.particles.forEach((particle: Particle) => {
      particle.move();
      this.checkBounds(particle);
      particle.draw();
    });
    this.drawParticleLines();
    requestAnimationFrame(() => {
      this.animate();
    });
  }
}
