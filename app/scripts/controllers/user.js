'use strict';
/**
 * @ngdoc function
 * @name appointmeApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp').controller('UserRegistrationCtrl', function ($scope, User, $rootScope, $state) {
    $rootScope.pageTitle = $state.current.data.title;
    $scope.user = {};
    $scope.submit = function () {
        var user = new User($scope.user);
        user.$save();
    };
}).controller('UserManageAccountCtrl', function ($state, $rootScope, $scope, isAuth, Tasker, categories, $q, toaster) {
    $rootScope.pageTitle = $state.current.data.title;
    $scope.categories = {};
    var container = angular.copy(categories);
    angular.forEach(container.data, function (item) {
        if(typeof item._parent === 'undefined') {
            item.children = [];
            $scope.categories[item._id] = item;
        } else {
            $scope.categories[item._parent] = $scope.categories[item._parent] || {};
            $scope.categories[item._parent].children.push(item);
        }
    });
    var _mapCategoryName = function (id) {
        var returnValue;
        angular.forEach(categories.data, function (item) {
            if(item._id === id) {
                returnValue = item.name;
            }
        });
        return returnValue;
    };
    $scope.user = isAuth.data;
    $scope.capableTaskToAdd = {};
    $scope.addCapableTask = function () {
        var capableTask = {
            _id: $scope.capableTaskToAdd.id,
            name: _mapCategoryName($scope.capableTaskToAdd.id),
            description: $scope.capableTaskToAdd.description,
            rate: $scope.capableTaskToAdd.rate
        };
        $scope.user._tasker.capableTask.push(capableTask);
    };
    $scope.submit = function () {
        $q.when([$scope.updateUser(), $scope.updateTasker()], function (data) {
            toaster.pop('success', 'information updated');
        }, function (err) {
            toaster.pop('error', 'Failed to update');
        });
    };
    $scope.updateUser = function () {
        var user = new Tasker($scope.user);
        return user.$update();
    };
    $scope.updateTasker = function () {
        var tasker = new Tasker($scope.user._tasker);
        return tasker.$update();
    };
});