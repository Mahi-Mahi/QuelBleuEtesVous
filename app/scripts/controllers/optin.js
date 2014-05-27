'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('OptinCtrl', function(debug, $scope, $timeout, $location) {

		if (debug) {
			$timeout(function() {
				$location.url('/resultat');
			}, 100);
		}

		$scope.goToResult = function() {
			$location.url('/resultat');
		};

	});