'use strict';

/**
 * @ngdoc function
 * @name appointmeApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp')
  .controller('AuthCtrl', function ($scope, Auth, $rootScope, $location, toaster) {
  	$rootScope.pageTitle = 'Sign In';
    $scope.user = {};
  	$scope.submit = function(){
  		var auth = new Auth($scope.user);
  		auth
        .$save()
        .then(function(result){
            if(result.status ===0){
                $rootScope.$broadcast('login');
                $location.path('/');
                toaster.pop('success','Successfully logged in.');
            }
        });
  	};
  });
