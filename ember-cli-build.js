/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {});
  app.import('vendor/FileSaver.js');
  app.import('vendor/jszip.js');
  app.import('vendor/custom-bootstrap.css');
  return app.toTree();
};