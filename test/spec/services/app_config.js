'use strict';

describe('Service: AppConfig', function () {

  // load the service's module
  beforeEach(module('quelBleuEtesVousApp'));

  // instantiate service
  var AppConfig;
  beforeEach(inject(function (_AppConfig_) {
    AppConfig = _AppConfig_;
  }));

  it('should do something', function () {
    expect(!!AppConfig).toBe(true);
  });

});
