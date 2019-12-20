import { sum } from './sum';

test('add', () => {
  expect(sum([1, 2])).toBe(3);
  expect(sum([0])).toBe(0);
});
