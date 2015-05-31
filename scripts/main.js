'use strict'

// Import CSS styles
require('../styles/main.css')

// Import Stylus styles
require('../styles/main.styl')

var angular = require('angular')

angular.module('HelloWorld', [
  require('./components').name
])
