'use strict';

/**
 * @ngdoc function
 * @name appointmeApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp')
  .controller('AuthCtrl', function ($scope, Auth) {
    $scope.user = {};
  	window.user = $scope.user;
  	$scope.submit = function(){
  		var auth = new Auth($scope.user);
  		auth.$save();
  	}
  });
