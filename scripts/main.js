'use strict'

var angular = require('angular')

angular.module('HelloWorld', [
  require('ngreact').name,
  require('./components').name
])
