'use strict'

module.exports = function() {
  return {
    template: '{{ ctrl.world }}',
    controller: function() {
      this.world = 'World'
    },
    controllerAs: 'ctrl'
  }
}
