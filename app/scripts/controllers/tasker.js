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
    if(!!$stateParams.query){
        console.log($stateParams.query);
        $scope.data.query = $stateParams.query;
        search($stateParams.query);
    }


    $scope.submit = function(){
        $state.go($state.current.name, {query: $scope.data.query});
    }
});
angular.module('appointmeApp').controller('TaskerDetailCtrl', function ($stateParams, $scope, Tasker, toaster) {
    $scope.tasker = {};
    Tasker.get({id: $stateParams.id}, function(data){
        $scope.tasker = data.data;
    });
});
