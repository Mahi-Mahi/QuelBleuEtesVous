'use strict';
/* global jQuery */

angular.module('quelBleuEtesVousApp')
	.controller('PlayersCtrl', function(prod, config, $scope, dataService, $timeout) {

		var debug;
		debug = false && !prod;

		$scope.baseurl = config.baseurl;

		$scope.slider = {
			players: dataService.data.players.players,
			opened: false,
			before: function() {
				this.opened = true;
				// jQuery('.flex-viewport').show();
				jQuery('.container').addClass('opened');
			},
			close: function() {
				this.opened = false;
				// jQuery('.flex-viewport').hide();
				jQuery('.container').removeClass('opened');
			}
		};

		$timeout(function() {

			jQuery(".flexslider").flexslider({
				animation: 'slide',
				controlNav: 'thumbnails',
				directionNav: true,
				slideshow: false,
				before: $scope.slider.before,
				close: $scope.slider.close

			});

			jQuery('.flex-control-thumbs').on('click', 'li', function() {
				$scope.slider.opened = true;
				window.scrollTo(0, 0);
				$scope.$apply();
			});
		}, 500);

	});