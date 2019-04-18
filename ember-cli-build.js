"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });
  app.import("vendor/FileSaver.js", { using: [
    { transformation: 'amd', as: 'file-saver' }
  ] });
  app.import("vendor/jszip.js");
  return app.toTree();
};
