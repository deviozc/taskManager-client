'use strict';
/**
 * @ngdoc directive
 * @name appointmeApp.directive:mainNav
 * @description
 * # mainNav
 */
angular.module('appointmeApp').directive('mainNav', function ($location, Auth, $document, Utility) {
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
            scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
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
            
            scope.isIconMenuOpen = false;
            
            scope.isMobile = Utility.isMobile();
            if(!scope.isMobile){
                scope.isIconMenuOpen = true;
            }
            
            scope.isMenuOpen = false;
            var setIconMenuOpen = function (open) {
                scope.isIconMenuOpen = !scope.isMobile && open;
            };
            scope.openMenu = function () {
                scope.isMenuOpen = true;
            };
            scope.toggleMenu = function ($event) {
                if( !! $event) {
                    $event.stopPropagation();
                }
                scope.isMenuOpen = !scope.isMenuOpen;
            };
//             scope.openIconMenu = function () {
//                 setIconMenuOpen(true);
//             };
            scope.closeMenu = function () {
                scope.isMenuOpen = false;
            };
//             scope.closeIconMenu = function () {
//                 scope.isIconMenuOpen = false;
//                 setIconMenuOpen(false);
//             };
            $document.click(function () {
                scope.closeMenu();
                scope.$digest();
            });
        }
    };
});
