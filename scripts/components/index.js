'use strict'

var angular = require('angular')

module.exports =
  angular.module('HelloWorld.components', [])
    .directive('hwHello', require('./hwHello').hwHello)
    .directive('hwWorld', require('./hwWorld').hwWorld)
    .controller('hwWorldCtrl', require('./hwWorld').hwWorldCtrl)
