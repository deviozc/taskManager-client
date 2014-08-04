'use strict';

/**
 * @ngdoc directive
 * @name appointmeApp.directive:elVisited
 * @description
 * # elVisited
 */
angular.module('appointmeApp')
  .directive('elVisited', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl) {
      ctrl.$visited = false;
      element.bind('focus', function(evt) {
        scope.$apply(function() {ctrl.$visited = true;});
      });
    }
  };
});
