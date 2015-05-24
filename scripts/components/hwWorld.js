angular.module('HelloWorld.components')
  .directive('hwWorld', function() {
    return {
      template: '{{ ctrl.world }}',
      controller: 'hwWorldCtrl',
      controllerAs: 'ctrl'
    }
  })
  .controller('hwWorldCtrl', function() {
    this.world = 'World'
  })
