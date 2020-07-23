import { Budget } from '../../budget/budget';
import { Tax } from '../../tax-calculator/tax';

export class Icms implements Tax {
  constructor() {}

  calculate(budget: Budget) {
    const valueWithTax = budget.getValue() * 0.1;
    return valueWithTax;
  }
}
