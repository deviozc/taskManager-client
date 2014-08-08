'use strict';

/**
 * @ngdoc function
 * @name appointmeApp.controller:TaskerCtrl
 * @description
 * # TaskerCtrl
 * Controller of the appointmeApp
 */

angular.module('appointmeApp').controller('SearchCtrl', function ($scope, $state, $stateParams, Tasker, toaster) {
    $scope.taskers = [];
    $scope.taskCategories = [];
    $scope.data = {
        query: ''
    };
    var search = function(queryString){
        Tasker.search({query: queryString}, function(data){
            $scope.taskers = data.data.taskers;
            $scope.taskCategories = data.data.categories;
            if($scope.taskers.length === 0){
                toaster.pop('error', 'No Result');
            }
        });
    };
    if(!!$stateParams.queryString){
        console.log($stateParams.queryString);
        search($stateParams.queryString);
    }


    $scope.submit = function(){
        search($scope.data.query);
        $stateParams.queryString = $scope.data.query;
        $state.go($state.current.name, $stateParams);
    }
});
angular.module('appointmeApp').controller('TaskerDetailCtrl', function ($stateParams, $scope, Tasker, toaster) {
    $scope.tasker = {};
    Tasker.get({id: $stateParams.id}, function(data){
        $scope.tasker = data.data;
    });
});
