import { divide } from './divide';

test('divide', () => {
  expect(divide(1, 2)).toBe(0.5);
  expect(divide(0, 8)).toBe(0);
});
