// Create fake employee for testing
import faker from 'faker';
import BaseFactory from './base.factory';

class EmployeeFactory extends BaseFactory {
  generate(attrs) {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      annualSalary: faker.finance.amount(80000,95000,2),
      superRate: faker.random.number({min: 0, max: 50}),
      paymentStartDate: `01/${faker.random.number({min: 1, max: 10})}/2018`,
      ...attrs,
    };
  }
}

export default new EmployeeFactory();
