import { TaxCalculator } from './tax-calculator/taxCalculator';
import { Icms, Iss } from './tax-calculator/tax/';
import { Budget } from './budget/budget';
class Main {
  constructor() {}

  calculateTaxes() {
    const icms = new Icms();
    const iss = new Iss();

    const value = 500;
    const budget = new Budget(value);

    const taxCalculator = new TaxCalculator();

    const valueWithIcms = taxCalculator.calculate(budget, icms);
    const valueWithIss = taxCalculator.calculate(budget, iss);

    console.log('value with icms', valueWithIcms);
    console.log('value with iss', valueWithIss);
  }
}

new Main().calculateTaxes();
