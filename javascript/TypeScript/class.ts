interface Point {
  x: number,
  y: number
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle{
  currentLocation: Point;
  travelTo(point: Point): void{
        console.log(`taxi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
  }
}

class Bus implements Vehicle{
  currentLocation: Point;
  travelTo(point: Point): void{
    console.log(`bus X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
  }
}