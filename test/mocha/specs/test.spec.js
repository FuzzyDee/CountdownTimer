require('babel-polyfill');

import assert from 'assert';
import Server from '../../../app/server';

describe('App', () => {

  before(() => {
    Server.start(9000);
  });

  after(() => {
    Server.stop();
  });

  beforeEach(() => {
    browser.url('http://localhost:9000');
  });

  it('todo e2e', () => {
    const app = browser.element(`[data-automation='app']`);
    const appVisible = app.isVisible();
    assert.equal(appVisible, true);
  });

});
