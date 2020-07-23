import { Budget } from '../budget/budget';
import { TaxCalculator } from '../tax-calculator/taxCalculator';
import { Icms, Iss } from '../tax-calculator/tax/';

describe('Taxes', () => {
  const value = 500;
  test('Value with ICMS', () => {
    const taxCalculator = new TaxCalculator();
    const valueWithIcms = taxCalculator.calculate(
      new Budget(value),
      new Icms()
    );
    expect(valueWithIcms).toEqual(50);
  });

  test('Value with ISS', () => {
    const taxCalculator = new TaxCalculator();
    const valueWithIss = taxCalculator.calculate(new Budget(value), new Iss());
    expect(valueWithIss).toEqual(30);
  });
});
