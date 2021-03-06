'use strict';
/**
 * @ngdoc function
 * @name appointmeApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the appointmeApp
 */
angular.module('appointmeApp').controller('UserRegistrationCtrl', function ($scope, User, $rootScope, $state) {
    $scope.user = {};
    $scope.submit = function () {
        var user = new User($scope.user);
        user.$save();
    };
}).controller('UserManageAccountCtrl', function ($state, $rootScope, $scope, isAuth, User, Tasker, categories, $q, toaster) {
    $scope.categories = [];
    var container = angular.copy(categories);
    var parents = {};
    angular.forEach(container.data, function (item) {
        
        if(!item._parent){
            parents[item._id] = item;
        }
    });
    angular.forEach(container.data, function(item){
        if(!!item._parent){
            console.log(container.data);
            item._parent = parents[item._parent].name;
            $scope.categories.push(item);
        }
    });
    console.log(container.data);
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


    if(!!$scope.user._tasker){

        $scope.capableTaskToUpdate = $scope.user._tasker.capableTask.map(function(item){
            var result = angular.copy(item);
            result.name = item._categoryId.name;
            result._categoryId = item._categoryId._id;
            return result;
        });
        angular.forEach( $scope.user._tasker.capableTask, function(item){
            item.name = _mapCategoryName(item._id);
        });

    }
    

    $scope.removeCapableTask = function(index){
        $scope.capableTaskToUpdate.splice(index, 1);
    };

    
    $scope.addCapableTask = function () {

        var capableTask = {
            _categoryId: $scope.capableTaskToAdd.id,
            name: _mapCategoryName($scope.capableTaskToAdd.id),
            description: $scope.capableTaskToAdd.description,
            rate: $scope.capableTaskToAdd.rate
        };
        $scope.capableTaskToUpdate.push(capableTask);
    };
    $scope.submit = function () {
        $q.when([$scope.updateUser(), $scope.updateTasker()], function (data) {
            toaster.pop('success', 'information updated');
        }, function (err) {
            toaster.pop('error', 'Failed to update');
        });
    };
    $scope.updateUser = function () {
        var user = new User($scope.user);
        return user.$update();
    };
    $scope.updateTasker = function () {
        if(!$scope.user._tasker){
            return;
        }
        $scope.user._tasker.capableTask = $scope.capableTaskToUpdate.map(function(item){
            var result = angular.copy(item);
            delete result.name;
            return result;
        });
        var tasker = new Tasker($scope.user._tasker);
        return tasker.$update();
    };
});
