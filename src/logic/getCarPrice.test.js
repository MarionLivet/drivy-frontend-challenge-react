import getCarPrice from './getCarPrice';

const car = {
  pricePerKm: 34,
  pricePerDay: 1200,
};

it('should return the price for duration = 1 day', () => {
  expect(getCarPrice(100, 1, car)).toBe(46);
});

it('should return the price for duration > 1 day', () => {
  expect(getCarPrice(100, 2, car)).toBe(58*0.9);
});

it('should return the price for duration > 4 days', () => {
  expect(getCarPrice(100, 5, car)).toBe(94*0.7);
});

it('should return the price for duration > 10 days', () => {
  expect(getCarPrice(100, 20, car)).toBe(274*0.5);
});

it('should return the price rounded', () => {
  expect(getCarPrice(300, 3, {
    pricePerKm: 21,
    pricePerDay: 1200,
  })).toBe(89.1);
});