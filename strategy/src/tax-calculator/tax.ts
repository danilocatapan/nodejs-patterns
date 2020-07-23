import { Budget } from '../budget/budget';

export interface Tax {
  calculate(budget: Budget): number;
}
