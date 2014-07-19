'use strict';

/**
 * @ngdoc function
 * @name appointmeApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp')
  .controller('CategoryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
