'use strict';
/**
 * @ngdoc function
 * @name appointmeApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp').controller('AuthCtrl', function ($scope, Auth, $rootScope, $location, $state) {
    $scope.user = {};
    $scope.submit = function () {
        var auth = new(Auth.init())($scope.user);
        auth.$save().then(function (result) {
            if(result.status === 0) {
                Auth.setLoggedIn(true);
                $location.path('/');
            }
        });
    };
});
