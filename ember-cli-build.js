/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  //bootstrap library
  app.import('bower_components/bootstrap/dist/css/bootstrap.css')

  //moment library
  app.import('bower_components/moment/min/moment.min.js')

  return app.toTree();
};
