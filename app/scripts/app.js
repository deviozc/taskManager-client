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
	.module('appointmeApp', ['ngResource', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");
		//
		// Now set up the states
		$stateProvider
			.state('main', {
				url: "/",
				templateUrl: "views/main.html",
				controller: 'MainCtrl',
				resolve: {
					checkUser: function(Auth){
						return Auth.get();
					}
				}
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
	});