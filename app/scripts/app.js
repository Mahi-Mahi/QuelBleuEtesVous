'use strict';

angular
	.module('quelBleuEtesVousApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute',
		'ngAnimate'
	])
	.constant('debug', true)
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			.when('/jouer', {
				templateUrl: 'views/play.html',
				controller: 'PlayCtrl',
				resolve: {
					load: function($route, dataService) {
						return dataService.load('questions');
					}
				}
			})
			.when('/resultat', {
				templateUrl: 'views/result.html',
				controller: 'ResultCtrl',
				resolve: {
					load: function($route, dataService) {
						return dataService.load('players');
					}
				}
			})
			.when('/optin', {
				templateUrl: 'views/optin.html',
				controller: 'OptinCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});