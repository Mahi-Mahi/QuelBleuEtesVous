'use strict';

angular
	.module('quelBleuEtesVousApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute'
	])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			.when('/play', {
				templateUrl: 'views/play.html',
				controller: 'PlayCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});