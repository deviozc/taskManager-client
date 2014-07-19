'use strict';

/**
 * @ngdoc function
 * @name appointmeApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp')
  .controller('TaskCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
