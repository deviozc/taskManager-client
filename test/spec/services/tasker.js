'use strict';

describe('Service: tasker', function () {

  // load the service's module
  beforeEach(module('appointmeApp'));

  // instantiate service
  var tasker;
  beforeEach(inject(function (_tasker_) {
    tasker = _tasker_;
  }));

  it('should do something', function () {
    expect(!!tasker).toBe(true);
  });

});
