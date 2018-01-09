require('babel-register');
const Server = require('../../app/server');
const expect = require('jest-matchers');

exports.config = {
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome'
  }],
  sync: true,
  logLevel: 'silent',

  coloredLogs: true,

  deprecationWarnings: true,

  bail: 0,

  screenshotPath: './errorShots/',

  baseUrl: 'http://localhost:9000',

  waitforTimeout: 10000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'cucumber',
  specs: [
    'test/cucumber/features/**/*.feature',
  ],
  cucumberOpts: {
    backtrace: false,
    compiler: [
      'js:babel-register',
    ],
    failAmbiguousDefinitions: true,
    failFast: false,
    ignoreUndefinedDefinitions: false,
    name: [],
    snippets: true,
    source: true,
    profile: [],
    require: [
      'test/cucumber/definitions/definition.js',
    ],
    snippetSyntax: undefined,
    strict: true,
    tagExpression: 'not @Pending',
    tagsInTitle: false,
    timeout: 20000
  },
  before: () => {
    global.expect = expect;
  },
  
  onPrepare: (config, capabilities) => {
    Server.start();
  },
  onComplete: (config, capabilities) => {
    Server.stop();
  }
}
