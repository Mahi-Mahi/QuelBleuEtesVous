'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('HomeCtrl', function($scope, $timeout, $location) {

		$timeout(function() {
			$location.url('/jouer');
		}, 100);

	});