class Bike {
  constructor(brand) {
    this.bikename = brand;
  }
  bike() {
    return `I have a ${this.bikename}`;
  }
}

class Model extends Bike {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return `${this.bike()}, It is a ${this.model}`;
  }
}

class Color extends Model {
    constructor(brand, mod, col) {
      super(brand, mod);
      this.color = col;
    }
    spec() {
      return `${this.show()} and it is ${this.color} in color`;
    }
}

const myBike = new Color("Yamaha", "R15", "Blue");
console.log(myBike.spec());