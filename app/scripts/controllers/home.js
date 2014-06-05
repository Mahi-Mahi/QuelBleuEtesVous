'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('HomeCtrl', function(prod, config, $scope, $timeout, $location) {

		var debug = false && prod;

		$scope.baseurl = config.baseurl;

		$scope.rand = Math.ceil(Math.random() * 8);

		if (debug) {
			$timeout(function() {
				$location.url('/jouer');
			}, 100);
		}

	});