export default class Building {
  // Constructor with sqft attribute
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Cannot instantiate an abstract class');
    }
    this._sqft = sqft; // store sqft in _sqft
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method that must be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

