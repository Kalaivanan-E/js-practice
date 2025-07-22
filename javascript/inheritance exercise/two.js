class Vehicle {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log(`The ${this.type} is starting.`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log("The car is driving.");
  }
}

const myCar = new Car("car");
myCar.start();  // The car is starting.
myCar.drive();  // The car is driving.
