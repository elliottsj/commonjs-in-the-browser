'use strict'

var angular = require('angular')

module.exports =
  angular.module('HelloWorld.components', [])
    .directive('hwHello', require('./hwHello'))
    .directive('hwWorld', require('./hwWorld'))
