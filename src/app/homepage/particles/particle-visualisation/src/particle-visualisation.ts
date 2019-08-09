import { Canvas } from './canvas';
import { CanvasDimensions } from './canvas-dimensions';
import { Particle } from './particle';
import { Vector } from './vector';

/**
 * TODO: Refactor this class to try and reduce the number of loops within the
 * code
 * This class controls the Particle Visualisation functionality (e.g. creating
 * the particles, moving them, handling clicks)
 */
export class ParticleVisualisation {
  /**
   * An array of particle objects
   */
  public particles: Particle[] = [];

  /**
   * Whether or not the user is currently clicking
   */
  public isClicking = false;

  /**
   * The default configuration (e.g. number of particles)
   */
  private config = {
    canvasBackgroundColor: 'rgba(27, 27, 30, 1)',
    particleCount: 200,
    lineTolerance: 100
  };

  /**
   * An instance of the Canvas class
   */
  public canvas: Canvas;

  /**
   *  A variable to store the array to calculate the Frames Per Second
   */
  private times: number[] = [];

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

  /**
   * This method is used to move the particles away from
   * the cursor when the user is clicking
   * @param mouseX The X Coordinate of the current mouse position
   * @param mouseY The Y Coordinate of the current mouse position
   */
  public handleMouseOver(mouseX: number, mouseY: number) {
    if (!this.isClicking) {
      // If the user is not clicking. Do nothing
      return;
    }
    const mousePositionVector = new Vector(mouseX, mouseY, 0);
    for (let i = 0; i < this.particles.length; i += 1) {
      // ➰
      const scalarDistanceBetween = Math.sqrt(
        Math.pow(this.particles[i].position.x - mousePositionVector.x, 2) +
          Math.pow(this.particles[i].position.y - mousePositionVector.y, 2)
      );

      const unitVectorBetween = mousePositionVector
        .minus(this.particles[i].position)
        .normalize();
      const force = unitVectorBetween.times(
        -10000 / scalarDistanceBetween ** 2
      );
      this.particles[i].velocity = this.particles[i].velocity.add(force);
    }
  }

  /**
   * This method populates the array of particles.
   * Each particles created has a random position and
   * velocity.
   */
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
    for (const a of this.particles) {
      for (const b of this.particles) {
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

  private checkFPS() {
    let fps: number;
    const now = performance.now();
    while (this.times.length > 0 && this.times[0] <= now - 1000) {
      this.times.shift();
    }
    this.times.push(now);
    fps = this.times.length;
    if (fps < 25) {
      this.particles.pop();
    } else if (fps > 35) {
      this.particles.push(
        new Particle(
          new Vector(
            Math.floor(Math.random() * this.canvas.canvas.width),
            Math.floor(Math.random() * this.canvas.canvas.height),
            0
          ),
          new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1, 0),
          this.canvas
        )
      );
    }
  }

  private animate() {
    this.checkFPS();
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
