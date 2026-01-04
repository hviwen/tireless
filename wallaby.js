module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'common/**/*.js',
      'composable/**/*.js',
      'test/**/*.js',
      '!**/*.test.js'
    ],
    tests: ['**/*.test.js', 'test/**/*.spec.js'],
    env: { type: 'node' },
    testFramework: 'jest'
  };
};