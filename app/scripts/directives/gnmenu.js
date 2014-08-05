'use strict';
/**
 * @ngdoc directive
 * @name appointmeApp.directive:gnMenu
 * @description
 * # gnMenu
 */
angular.module('appointmeApp').directive('gnMenu', function ($document, Utility) {
    return {
        restrict: 'AE',
        link: function postLink(scope, element, attrs) {
            scope.isMobile = Utility.isMobile();
            scope.isIconMenuOpen = false;
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
            scope.openIconMenu = function () {
                setIconMenuOpen(true);
            };
            scope.closeMenu = function () {
                scope.isMenuOpen = false;
            };
            scope.closeIconMenu = function () {
                scope.isIconMenuOpen = false;
                setIconMenuOpen(false);
            };
            $document.click(function () {
                scope.closeMenu();
                scope.$digest();
            });
        }
    };
});