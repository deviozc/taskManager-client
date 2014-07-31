'use strict';
angular.module('appointmeApp', ['ngResource', 'ui.router', 'ngAnimate', 'toaster'])
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        data: {
            title: 'Home'
        }
    }).state('registration', {
        url: '/registration',
        templateUrl: 'views/user/registration.html',
        controller: 'UserRegistrationCtrl',
        data: {
            title: 'Registration'
        }
    }).state('myAccount', {
        url: '/my-account',
        templateUrl: 'views/user/my-account.html',
        controller: 'UserManageAccountCtrl',
        data: {
            title: 'Dashboard'
        },
        resolve: {
            categories: function(Category){
                return Category.get().$promise;
            },
            isAuth: function (Auth) {
                return Auth.init().get().$promise;
            }
        }
    }).state('login', {
        url: '/login',
        templateUrl: 'views/user/login.html',
        controller: 'AuthCtrl',
        data: {
            title: 'Login'
        }
    }).state('search', {
        url: '/search/:queryString',
        templateUrl: 'views/tasker/search.html',
        controller: 'SearchCtrl',
        data: {
            title: 'Search'
        }
    }).state('taskerDetail', {
        url: '/tasker/:id',
        templateUrl: 'views/tasker/detail.html',
        controller: 'TaskerDetailCtrl',
        data: {
            title: 'Tasker Detail'
        }
    });
}).config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}).run(function ($rootScope, toaster) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if(error.status === 401) {
            console.log(error);
            toaster.pop('error', 'UnAuth');
        }else if(error.status === 403) {
            toaster.pop('error', 'not enough privileges');
        }
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState){
      $rootScope.pageTitle = toState.data.title;
    });
});
