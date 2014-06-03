'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('HomeCtrl', function(debug, $scope, $timeout, $location) {

	// debug = false;

		$scope.rand = Math.ceil(Math.random() * 4);

		if (debug) {
			$timeout(function() {
				$location.url('/jouer');
			}, 100);
		}

	});