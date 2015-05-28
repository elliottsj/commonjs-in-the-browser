'use strict'

var angular = require('angular')

module.exports =
  angular.module('HelloWorld.components', [])
    .value('Hello', require('./Hello'))
    .value('World', require('./World'))
