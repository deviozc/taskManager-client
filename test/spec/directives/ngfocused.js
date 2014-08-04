'use strict';

describe('Directive: ngFocused', function () {

  // load the directive's module
  beforeEach(module('appointmeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-focused></ng-focused>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngFocused directive');
  }));
});
