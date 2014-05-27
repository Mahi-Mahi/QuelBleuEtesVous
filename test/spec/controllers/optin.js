'use strict';

describe('Controller: OptinCtrl', function () {

  // load the controller's module
  beforeEach(module('quelBleuEtesVousApp'));

  var OptinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OptinCtrl = $controller('OptinCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
