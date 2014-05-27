'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('HomeCtrl', function(debug, $scope, $timeout, $location) {

		if (debug) {
			$timeout(function() {
				$location.url('/jouer');
			}, 100);
		}

	});