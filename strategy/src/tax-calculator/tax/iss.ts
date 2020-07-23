import { Budget } from '../../budget/budget';
import { Tax } from '../../tax-calculator/tax';

export class Iss implements Tax {
  constructor() {}

  calculate(budget: Budget) {
    const valueWithTax = budget.getValue() * 0.06;
    return valueWithTax;
  }
}
