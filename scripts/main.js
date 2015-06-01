'use strict'

// Import ngDialog styles
require('ng-dialog/css/ngDialog.css')
require('ng-dialog/css/ngDialog-theme-default.css')

// Import CSS styles
require('../styles/main.css')

// Import Stylus styles
require('../styles/main.styl')

var angular = require('angular')

angular.module('HelloWorld', [
  require('ng-dialog').name,
  require('./components').name
])
