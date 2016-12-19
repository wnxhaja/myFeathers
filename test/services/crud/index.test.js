'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('crud service', function() {
  it('registered the cruds service', () => {
    assert.ok(app.service('cruds'));
  });
});
