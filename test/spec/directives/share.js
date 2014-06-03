'use strict';

describe('Directive: share', function () {

  // load the directive's module
  beforeEach(module('quelBleuEtesVousApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<share></share>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the share directive');
  }));
});
