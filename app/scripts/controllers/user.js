'use strict';
/**
 * @ngdoc function
 * @name appointmeApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp')
.controller('UserRegistrationCtrl', function ($scope, User, $rootScope) {
    $rootScope.pageTitle = 'User Home';
    $scope.user = {};
    $scope.submit = function () {
        var user = new User($scope.user);
        user.$save();
    };
})
.controller('UserManageAccountCtrl', function ($scope, isAuth) {
    console.log(isAuth);
    $scope.user = isAuth.data;
});