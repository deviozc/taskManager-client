'use strict';

/**
 * @ngdoc function
 * @name appointmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp')
  .controller('MainCtrl', function ($scope, User) {
        var user = new User({
            email: 'test@test.ca',
            password: 'dd',
            confirmPassword: 'dd',
            nickName: 'test'
        });


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
