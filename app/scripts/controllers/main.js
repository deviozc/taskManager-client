'use strict';

/**
 * @ngdoc function
 * @name appointmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
