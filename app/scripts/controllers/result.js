'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('ResultCtrl', function(debug, $rootScope, $scope, $location, dataService) {

		if (!$rootScope.userAnswers) {
			$location.path('/');
			return;
		}

		var sumCoord1 = 0,
			sumCoord2 = 0;
		angular.forEach($rootScope.userAnswers, function(answer) {
			sumCoord1 += answer.coord1;
			sumCoord2 += answer.coord2;
		});

		var user = {
			coord1: sumCoord1 * dataService.data.questions.constants.coord1,
			coord2: sumCoord2 * dataService.data.questions.constants.coord2
		};

		console.log(sumCoord1, sumCoord2);

		var minDistance = null;
		var nearest;
		angular.forEach(dataService.data.players.players, function(player) {
			var distance = Math.sqrt(Math.pow(player.coord1 - user.coord1, 2) + Math.pow(player.coord2 - user.coord2, 2));
			if (minDistance === null || distance < minDistance) {
				minDistance = distance;
				nearest = player;
			}
		});
		console.log(nearest, minDistance);

		$scope.nearest = nearest;

		if (debug) {
			// $scope.nearest = dataService.data.players.players[2];
		}

	});