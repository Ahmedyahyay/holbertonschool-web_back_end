import Currency from './3-currency.js';

export default class Pricing {
  // Constructor with amount and currency attributes
  constructor(amount, currency) {
    this._amount = amount; // store amount in _amount
    this._currency = currency; // store currency in _currency
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(value) {
    this._amount = value;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(value) {
    this._currency = value;
  }

  // Method to display the full price in the format: amount currency_name (currency_code)
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

