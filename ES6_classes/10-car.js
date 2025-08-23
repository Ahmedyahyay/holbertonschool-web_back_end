class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Create a new instance of the same class (supporting inheritance)
    return new this.constructor();
  }
}

export default Car;

