'use strict';

describe('Directive: gnMenu', function () {

  // load the directive's module
  beforeEach(module('appointmeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gn-menu></gn-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gnMenu directive');
  }));
});
