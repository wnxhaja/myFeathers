'use strict';

import crud from './crud';

module.exports = function() {
  const app = this;

  app.configure(crud);
};
