import { add } from './add';

test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(0, 8)).toBe(8);
});
