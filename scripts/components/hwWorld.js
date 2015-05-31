'use strict'

module.exports = function() {
  return {
    template: '{{ ctrl.world }}',
    /*@ngInject*/
    controller: function($http) {
      this.world = 'World'
    },
    controllerAs: 'ctrl'
  }
}
