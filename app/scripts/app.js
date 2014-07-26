'use strict';
angular.module('appointmeApp', ['ngResource', 'ui.router', 'ngAnimate', 'toaster'])
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).state('registration', {
        url: '/registration',
        templateUrl: 'views/user/registration.html',
        controller: 'UserRegistrationCtrl'
    }).state('ccount', {
        url: '/my-account',
        templateUrl: 'views/user/my-account.html',
        controller: 'UserManageAccountCtrl',
        resolve: {
            isAuth: function (Auth) {
                return Auth.init().get().$promise;
            }
        }
    }).state('login', {
        url: '/login',
        templateUrl: 'views/user/login.html',
        controller: 'AuthCtrl'
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
});