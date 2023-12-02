class Shape {
    getArea() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return `Area of the circle: ${3.14 * this.radius * this.radius}`;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    getArea() {
        return `Area of the square: ${this.sideLength * this.sideLength}`;
    }
}

class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.b = b;
        this.h = h;
    }

    getArea() {
        return `Area of the triangle: ${1/2 * this.b * this.h}`;
    }
}

const circle = new Circle(5);
const square = new Square(4);
const triangle = new Triangle(5, 6)

console.log(circle.getArea());
console.log(square.getArea());
console.log(triangle.getArea());