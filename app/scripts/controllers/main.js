'use strict';

/**
 * @ngdoc function
 * @name appointmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $rootScope.pageTitle = 'Home';
  });
