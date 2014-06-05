'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('HomeCtrl', function(debug, baseurl, $scope, $timeout, $location) {

		debug = true;

		$scope.baseurl = baseurl;

		$scope.rand = Math.ceil(Math.random() * 8);

		if (debug) {
			$timeout(function() {
				$location.url('/jouer');
			}, 100);
		}

	});