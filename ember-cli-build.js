/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true
    }
  });
  app.import('vendor/FileSaver.js');
  app.import('vendor/jszip.js');
  return app.toTree();
};
