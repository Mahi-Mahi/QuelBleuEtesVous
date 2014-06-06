'use strict';

describe('Directive: colorbox', function () {

  // load the directive's module
  beforeEach(module('quelBleuEtesVousApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<colorbox></colorbox>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the colorbox directive');
  }));
});
