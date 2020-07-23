import { Budget } from '../budget/budget';
import { Tax } from './tax';

export class TaxCalculator {
  constructor() {}

  calculate(budget: Budget, tax: Tax): number {
    const value = tax.calculate(budget);
    return value;
  }
}
