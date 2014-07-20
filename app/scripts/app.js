'use strict';

/**
 * @ngdoc overview
 * @name appointmeApp
 * @description
 * # appointmeApp
 *
 * Main module of the application.
 */
angular
	.module('appointmeApp', ['ngResource', 'ui.router','ngAnimate','toaster'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");
		//
		// Now set up the states
		$stateProvider
			.state('main', {
				url: "/",
				templateUrl: "views/main.html",
				controller: 'MainCtrl'
			})
			.state('registration', {
				url: "/registration",
				templateUrl: "views/user/registration.html",
				controller: 'UserCtrl'
			})
			.state('login', {
				url: "/login",
				templateUrl: "views/user/login.html",
				controller: 'AuthCtrl'
			});
	})
.config(function($httpProvider) {
      $httpProvider.defaults.withCredentials = true;
    });