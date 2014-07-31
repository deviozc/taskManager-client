'use strict';
/**
 * @ngdoc directive
 * @name appointmeApp.directive:mainNav
 * @description
 * # mainNav
 */
angular.module('appointmeApp').directive('mainNav', function ($location, Auth) {
    return {
        templateUrl: 'scripts/directives/partials/mainNav.html',
        restrict: 'E',
        link: function (scope) {
            Auth.init().get().$promise.then(function (result) {
                if(result.status === 0) {
                    Auth.setLoggedIn(true);
                    scope.isAuthed = true;
                } else {
                    Auth.setLoggedIn(false);
                    scope.isAuthed = false;
                }
            });
            scope.logout = function () {
                Auth.init().delete().$promise.then(function (result) {
                    if(result.status === 0) {
                        Auth.setLoggedIn(false);
                        $location.path('/');
                    }
                });
            };
            scope.$on('logged_in', function () {
                scope.isAuthed = true;
            });
            scope.$on('logged_out', function () {
                scope.isAuthed = false;
            });
        }
    };
});
