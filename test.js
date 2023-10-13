const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('Convert Dollar to Yen', () => {
  expect(fromDollarToYen(100)).toBe(12790); // Test with your conversion rate
});

test('Convert Euro to Dollar', () => {
  expect(fromEuroToDollar(50)).toBe(60); // Test with your conversion rate
});

test('Convert Yen to Pound', () => {
  expect(fromYenToPound(5000)).toBe(4000); // Test with your conversion rate
});
