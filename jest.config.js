/*eslint-env es6*/
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  watchPathIgnorePatterns: [
    "node_modules/*",
    "dist/*"
  ],
  testPathIgnorePatterns: [
    "node_modules/*",
    "dist/*"
  ],
  verbose: true
};