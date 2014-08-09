'use strict';

/**
 * @ngdoc directive
 * @name appointmeApp.directive:selectPicker
 * @description
 * # selectPicker
 */
angular.module('appointmeApp')
  .directive('selectPicker', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
         element.selectpicker({style: 'btn btn-lg btn-primary btn-block', menuStyle: 'dropdown-inverse'});
      }
    };
  });
