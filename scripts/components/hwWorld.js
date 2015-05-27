'use strict'

exports.hwWorld = function() {
  return {
    template: '{{ ctrl.world }}',
    controller: 'hwWorldCtrl',
    controllerAs: 'ctrl'
  }
}

exports.hwWorldCtrl = function() {
  this.world = 'World'
}
