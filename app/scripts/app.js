'use strict';

angular
	.module('quelBleuEtesVousApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute',
		'ngAnimate',
		'angular-flexslider'
	])
	.config(function(config, $routeProvider) {
		$routeProvider
			.when(config.baseurl + '/', {
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
			.when('/jouer/:debug', {
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
			.when('/resultat/:player', {
				templateUrl: 'views/result.html',
				controller: 'ResultCtrl',
				resolve: {
					load: function($route, dataService) {
						return dataService.load('players');
					}
				}
			})
			.when('/resultat/:player/:static', {
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
			.when('/tous-les-joueurs', {
				templateUrl: 'views/players.html',
				controller: 'PlayersCtrl',
				resolve: {
					load: function($route, dataService) {
						return dataService.load('players');
					}
				}
			})
			.otherwise({
				redirectTo: config.baseurl + '/'
			});
	});