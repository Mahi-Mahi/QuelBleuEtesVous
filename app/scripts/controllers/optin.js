'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('OptinCtrl', function(prod, config, $scope, $timeout, $location, $http) {

		var debug = false && prod;

		$scope.baseurl = config.baseurl;

		$scope.goToResult = function() {
			$location.url('/resultat');
		};

		if (debug) {
			$timeout(function() {
				$scope.goToResult();
			}, 100);
		}

		$scope.optinUrl = config.optin_url;
		$scope.optin = function() {

			$http.post($scope.optinUrl, {
				email: $scope.email
			})
				.success(function(data, status) {
					console.log(data);
					$scope.status = status;
					$scope.data = data;
					$scope.result = data;
					$scope.goToResult();
				})
				.error(function(data, status) {
					console.log(data);
					$scope.data = data || "Request failed";
					$scope.status = status;
					$scope.goToResult();
				});
		};

	});