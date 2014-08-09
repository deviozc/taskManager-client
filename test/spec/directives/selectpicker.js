'use strict';

describe('Directive: selectPicker', function () {

  // load the directive's module
  beforeEach(module('appointmeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<select-picker></select-picker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the selectPicker directive');
  }));
});
