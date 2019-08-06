/**
 * A class to do things to do with Vectors which
 * will be used to describe position and movement.
 * Todo: Work out how to integrate all 3 dimensions into the game
 * @export
 * @class Vector
 */
export class Vector {
  constructor(
    public x: number = 0,
    public y: number = 0,
    public z: number = 0
  ) {}

  /**
   * Creates a new Vector from an array
   * @param arr An array of x, y coordinates
   * @returns A new Vector
   */
  public static fromArray(arr: number[]): Vector {
    return new Vector(arr[0], arr[1], arr[2]);
  }

  /**
   * Creates a new Vector from a Vector-like object
   * @param obj An object representing X & Y coordinates
   * @param obj.x A num
   * @returns
   */
  // tslint:disable-next-line: completed-docs
  public static fromObject(obj: { x: number; y: number; z: number }): Vector {
    return new Vector(obj.x, obj.y, obj.z);
  }

  /**
   * Create a clone of a vector.
   * @static
   * @param vector
   * @returns A copy of the current vector
   */
  public static clone(vector: Vector) {
    return Vector.fromObject(vector);
  }

  /**
   * Creates a new vector which is Vector1 - Vector2
   * @param v1 A vector instance
   * @param v2 A second vector instance
   * @returns
   */
  public static minus(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
  }
  /**
   * Creates a new vector which is the sum of two vectors
   * @param v1 A vector instance
   * @param v2 A second vector instance
   * @returns
   */
  public static add(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
  }
  /**
   * Creates a new vector which is the product of two vectors
   * @param v1 A vector instance
   * @param n A number to times the vector by
   * @returns A new vector
   */
  public static times(v1: Vector, n: number): Vector {
    return new Vector(n * v1.x, n * v1.y, n * v1.z);
  }

  /**
   * Creates a new vector which is the provided vector divided by n
   * @param v1 A vector instance
   * @param n A number to divide the vector by
   * @returns A new vector
   */
  public static divide(v1: Vector, n: number): Vector {
    return new Vector(v1.x / n, v1.y / n, v1.z / n);
  }

  public static dot(v1: Vector, v2: Vector): number {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }

  public static cross(v1: Vector, v2: Vector) {
    return new Vector(
      v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x
    );
  }

  public static normalize(v: Vector) {
    const magnitude = Vector.magnitude(v);
    const div = magnitude === 0 ? Infinity : 1.0 / magnitude;
    return Vector.times(v, div);
  }

  /**
   * Calculates the magnitude of the vector
   * @returns A number representing the magnitude of the vector
   */
  public static magnitude(v: Vector): number {
    return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
  }

  /**
   * This method returns a string which represents the vector
   * @returns A string representation of the Vector coordinates
   */
  public toString(): string {
    return JSON.stringify({ x: this.x, y: this.y });
  }

  /**
   * Creates a new Vector with the same x & y components
   * @returns A new vector
   */
  public clone(): Vector {
    return new Vector(this.x, this.y);
  }

  /**
   * Normalises the current vector
   * @returns the new normalised vector
   */
  public normalize(): Vector {
    return Vector.normalize(this);
  }

  /**
   * Calculates the magnitude of the current vector
   * @returns A number representing the magnitude of the current vector
   */
  public magnitude(): number {
    return Vector.magnitude(this);
  }

  /**
   * Adds a vector to the current vector instance
   * @param v2 The vector to add to the current one
   * @returns a new Vector
   */
  public add(v2: Vector): Vector {
    return Vector.add(this, v2);
  }
  /**
   * Adds a vector to the current vector instance
   * @param v2 The vector to add to the current one
   * @returns a new Vector
   */
  public minus(v2: Vector): Vector {
    return Vector.minus(this, v2);
  }
  /**
   * Multiplies the current vector by the specified
   * number
   * @param n the number to multiply the vector by
   * @returns a new Vector
   */
  public times(n: number) {
    return Vector.times(this, n);
  }

  /**
   * Divides the current vector by the specified number
   * @param n The number to divide the vector by
   * @returns A new Vector
   */
  public divide(n: number) {
    return Vector.divide(this, n);
  }

  /**
   * Calculates the dot product between the
   * current vector and the specified vector
   * @param v2 A vector instance
   * @returns
   */
  public dot(v2: Vector) {
    return Vector.dot(this, v2);
  }

  /**
   * Calculates the cross product between the
   * current vector and the specified vector
   * @param v2 A vector instance
   * @returns a new Vector
   */
  public cross(v2: Vector) {
    return Vector.cross(this, v2);
  }
}
