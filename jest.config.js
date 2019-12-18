
module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './coverage/',
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/testutils/**/*',
    '!src/bin/**/*',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,ts}',
    '<rootDir>/src/**/*.{spec,test}.{js,ts}',
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
