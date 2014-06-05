'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('ResultCtrl', function(prod, config, $rootScope, $scope, $location, dataService, $routeParams) {

		var debug = false && prod;

		$scope.baseurl = config.baseurl;

		var nearest;

		if ($routeParams.player) {
			angular.forEach(dataService.data.players.players, function(player) {
				if (player.slug === $routeParams.player) {
					nearest = player;
				}
			});
		}

		if ($rootScope.userAnswers) {

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

			var minDistance = null;
			angular.forEach(dataService.data.players.players, function(player) {
				var distance = Math.sqrt(Math.pow(player.coord1 - user.coord1, 2) + Math.pow(player.coord2 - user.coord2, 2));
				if (minDistance === null || distance < minDistance) {
					minDistance = distance;
					nearest = player;
				}
			});
			// console.log(sumCoord1, sumCoord2);
			// console.log(nearest, minDistance);
		}

		if (!nearest) {
			$location.path('/');
			return;
		}

		$scope.nearest = nearest;

		jQuery('head meta[property="og:title"]').remove();
		jQuery("head").append('<meta property="og:title" content="Je suis ' + nearest.name + '. Et vous ? - ' + config.seoTitle + '" />');

		// var shareText = "Je suis " + nearest.name + ", et vous ?";

		var shareUrl = [document.location.protocol, '//', document.location.host, document.location.pathname].join('') + 'resultat/' + nearest.slug;

		$scope.shareLink = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl);

		$scope.shareLink = 'https://www.facebook.com/dialog/share?app_id=574648085990160&display=popup&href=' + encodeURIComponent(shareUrl) + '&redirect_uri=' + encodeURIComponent(shareUrl);

		$scope.shareUrl = shareUrl;

		$scope.static = $routeParams.static;

		if (debug) {
			// $scope.nearest = dataService.data.players.players[2];
		}

	});