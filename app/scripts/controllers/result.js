'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('ResultCtrl', function($rootScope, $scope, $location) {

		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		if (!$rootScope.userAnswers) {
			$location.path('/');
		}

		console.log($rootScope.userAnswers);

	});