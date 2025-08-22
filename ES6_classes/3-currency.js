export default class Currency {
  // Constructor with two attributes: code and name
  constructor(code, name) {
    this._code = code;  // store code in _code
    this._name = name;  // store name in _name
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    this._name = value;
  }

  // Method to return the currency in the format "name (code)"
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

