'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('OptinCtrl', function(prod, config, $scope, $timeout, $location, $http, $log) {

		var debug = false && !prod;

		$log.log("optin");

		$scope.baseurl = config.baseurl;

		$scope.goToResult = function() {
			$location.url('/resultat');
		};

		if (debug) {
			$timeout(function() {
				$scope.goToResult();
			}, 100);
		}

		$scope.optinUrl = config.baseurl + config.optinUrl;
		$scope.optin = function() {

			$http.post($scope.optinUrl, {
				email: $scope.email
			})
				.success(function(data, status) {
					// $log.log(data);
					$scope.status = status;
					$scope.data = data;
					$scope.result = data;
					$scope.goToResult();
				})
				.error(function(data, status) {
					// $log.log(data);
					$scope.data = data || "Request failed";
					$scope.status = status;
					$scope.goToResult();
				});
		};

	});