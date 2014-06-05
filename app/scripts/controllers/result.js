'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('ResultCtrl', function(debug, baseurl, $rootScope, $scope, $location, dataService) {

		$scope.baseurl = baseurl;

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

		// var shareText = "Je suis " + nearest.name + ", et vous ?";

		var shareUrl = [document.location.protocol, '//', document.location.host, document.location.pathname].join('') + 'resultat/' + nearest.slug;

		$scope.shareLink = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl);

		$scope.shareLink = 'https://www.facebook.com/dialog/share?app_id=574648085990160&display=popup&href=' + encodeURIComponent(shareUrl) + '&redirect_uri=' + encodeURIComponent(shareUrl);

		$scope.shareUrl = shareUrl;

		if (debug) {
			// $scope.nearest = dataService.data.players.players[2];
		}

	});