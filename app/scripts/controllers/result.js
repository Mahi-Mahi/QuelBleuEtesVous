'use strict';
/* global jQuery */
/* global ga */

angular.module('quelBleuEtesVousApp')
	.controller('ResultCtrl', function(prod, config, $rootScope, $scope, $location, dataService, $routeParams, $timeout) {

		var debug = false && !prod;

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

			console.log(dataService.data.questions.constants);

			angular.forEach($rootScope.userAnswers, function(answer) {
				// console.log(answer.coord1, answer.coord2);
				sumCoord1 += answer.coord1;
				sumCoord2 += answer.coord2;
			});

			var user = {
				coord1: sumCoord1 / dataService.data.questions.constants.coord1,
				coord2: sumCoord2 / dataService.data.questions.constants.coord2
			};

			var minDistance = 999;
			angular.forEach(dataService.data.players.players, function(player) {
				var distance = Math.sqrt(Math.pow(player.coord1 - user.coord1, 2) + Math.pow(player.coord2 - user.coord2, 2));

				if (minDistance === 999 || distance < minDistance) {
					minDistance = distance;
					nearest = player;
				}

			});

			// console.log(nearest.slug, minDistance);

			ga('send', 'event', 'result', nearest.slug);

		}

		if (!nearest) {
			$location.path('/');
			return;
		}

		$scope.nearest = nearest;

		var shareText;
		// var shareUrl = [document.location.protocol, '//', document.location.host, document.location.pathname].join('') + 'resultat/' + nearest.slug;
		var shareUrl = 'http://nvx.franceinfo.fr/quizlesbleus2014/resultat/' + nearest.slug;

		jQuery('head meta[property="og:url"]').remove();
		jQuery("head").append('<meta property="og:url" content="' + shareUrl + '" />');
		jQuery('head meta[property="og:title"]').remove();
		jQuery("head").append('<meta property="og:title" content="Quel Bleu êtes-vous ? Je suis ' + nearest.name + ' ! " />');
		// jQuery('head meta[property="og:description"]').remove();
		// jQuery("head").append('<meta property="og:description" content="Quel Bleu êtes-vous ? Je suis ' + nearest.name + ' ! " />');
		jQuery('head meta[property="og:image"]').remove();
		jQuery("head").append('<meta property="og:image" content="' + config.baseurl + '/images/players/large/' + nearest.slug + '.png" />');

		// var shareText = "Je suis " + nearest.name + ", et vous ?";

		$scope.shareLink = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl);

		$scope.shareLinkFacebook = 'https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&sdk=joey&u=' + encodeURIComponent(shareUrl);

		shareText = "Je suis " + nearest.name + " ! Et vous, quel Bleu êtes-vous ? ";
		$scope.shareLinkTwitter = 'https://twitter.com/intent/tweet?&hashtags=' + (nearest.name.split(/ /)[0]) + '&via=franceinfo&text=' + encodeURIComponent(shareText) + '&url=' + encodeURIComponent(shareUrl);

		$scope.shareUrl = shareUrl;

		$scope.static = $routeParams.static;

		$timeout(function() {
			shareText = "Je suis " + nearest.name + " ! Et vous, quel Bleu êtes-vous ? ";
			jQuery('.footer-main .facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?t=' + encodeURIComponent(shareText) + '&amp;u=' + encodeURIComponent(shareUrl));
			jQuery('.footer-main .googleplus').attr('href', 'https://plus.google.com/share?url=' + encodeURIComponent(shareUrl));
			shareText = "Quel Bleu êtes-vous ? Je suis " + nearest.name + " ! ";
			jQuery('.footer-main .twitter').attr('href', 'https://twitter.com/intent/tweet?&hashtags=' + (nearest.name.split(/ /)[0]) + '&via=franceinfo&text=' + encodeURIComponent(shareText) + '&url=' + encodeURIComponent(shareUrl));
		}, 50);

		if (debug) {
			// $scope.nearest = dataService.data.players.players[2];
		}

	});