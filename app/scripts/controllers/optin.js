'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('OptinCtrl', function(debug, baseurl, $scope, $timeout, $location, $http) {

		$scope.goToResult = function() {
			$location.url('/resultat');
		};

		if (debug) {
			$timeout(function() {
				$scope.goToResult();
			}, 100);
		}

		$scope.optinUrl = '/backend/optin.php';
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