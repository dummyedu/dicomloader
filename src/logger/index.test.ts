import logger from '.';

test('logger has methods', () => {
  expect(logger).toHaveProperty('log');
  expect(logger).toHaveProperty('warn');
  expect(logger).toHaveProperty('error');
});
