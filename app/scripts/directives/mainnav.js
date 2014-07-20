'use strict';

/**
 * @ngdoc directive
 * @name appointmeApp.directive:mainNav
 * @description
 * # mainNav
 */
angular.module('appointmeApp')
  .directive('mainNav', function ($location) {
    return {
      templateUrl: 'scripts/directives/partials/mainNav.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.isActive = function(viewLocation){
        	return viewLocation === $location.path();
        };
      }
    };
  });
