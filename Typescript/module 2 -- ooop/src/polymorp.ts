class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radious: number;
  constructor(radious: number) {
    super();
    this.radious = radious;
  }

  getArea(): number {
    return Math.PI * this.radious * this.radious;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

let nullShape = new Shape();
let circle = new Circle(45);
let rectangle = new Rectangle(20, 30);

console.log(nullShape.getArea());
console.log(circle.getArea());
console.log(rectangle.getArea());
