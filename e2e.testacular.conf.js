basePath = '';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

autoWatch = false;

browsers = ['Firefox'];

singleRun = true;

proxies = {
  '/': 'http://localhost:9001/'
};