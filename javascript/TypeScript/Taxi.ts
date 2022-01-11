import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle {  

  constructor(private location?: Point, private color?: string) {  }

  travelTo(point: Point): void {
      console.log(`taksi X: ${this.location.x} Y: ${this.location.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
  }
}
