angular.module('HelloWorld', [])
  .directive('hwHello', function() {
    return { template: 'Hello' }
  })
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
