'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('ResultCtrl', function($rootScope, $scope, $location) {

		if (!$rootScope.userAnswers) {
			$location.path('/');
		}

		var sumCoord1 = 0,
			sumCoord2 = 0;
		angular.forEach($rootScope.userAnswers, function(answer, key) {
			console.log(answer);
			sumCoord1 += answer.coord1;
			sumCoord2 += answer.coord2;
		});

		console.log(sumCoord1, sumCoord2);

	});