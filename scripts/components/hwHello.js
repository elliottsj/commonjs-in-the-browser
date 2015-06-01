'use strict'

module.exports = function() {
  return {
    template: require('./hwHello.html'),
    scope: {},
    bindToController: true,
    controllerAs: 'ctrl',
    /*@ngInject*/
    controller: function(ngDialog) {
      this.openDialog = function() {
        ngDialog.open({
          template: require('./hwDialog.html'),
          plain: true
        })
      }
    }
  }
}
