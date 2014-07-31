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
    });
}).config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}).run(function ($rootScope, toaster) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if(error.status === 401) {
            if(error.data === '4011') {
                toaster.pop('error', 'UnAuth');
            } else if(error.data === '4012') {
                toaster.pop('error', 'not enough privileges');
            }
        }
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState){
      $rootScope.pageTitle = toState.data.title;
    });
});
