'use strict';

describe('Controller: TaskerCtrl', function () {

  // load the controller's module
  beforeEach(module('appointmeApp'));

  var TaskerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskerCtrl = $controller('TaskerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
