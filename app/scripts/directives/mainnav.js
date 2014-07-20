'use strict';

/**
 * @ngdoc directive
 * @name appointmeApp.directive:mainNav
 * @description
 * # mainNav
 */
angular.module('appointmeApp')
  .directive('mainNav', function ($location, Auth, $rootScope, toaster) {
    return {
      templateUrl: 'scripts/directives/partials/mainNav.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        Auth
        .get()
        .$promise
        .then(function(result){
            if(result.status === 0){
                scope.isAuthed = true;
            }
            else{
                scope.isAuthed = false;
            }
        });
        scope.isActive = function(viewLocation){
        	return viewLocation === $location.path();
        };
          
        scope.logout = function(){
            Auth.delete()
            .$promise
            .then(function(result){
               if(result.status === 0){
                   $rootScope.$broadcast('logout');
            	   $location.path('/');
                   toaster.pop('success','Successfully logged out.');
               }
            });
            
        };
          
        scope.$on('login', function(){
            scope.isAuthed = true;
            
        });
       	scope.$on('logout', function(){
            scope.isAuthed = false;
        });
      }
    };
  });
