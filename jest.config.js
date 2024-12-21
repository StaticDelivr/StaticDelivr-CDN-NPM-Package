module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], // Point to your setup file
  testPathIgnorePatterns: [
    '/node_modules/',
    '/examples/',
  ],
  globals: {
    // Enable Jest globals like test() and expect()
    jest: true,
  },
};
