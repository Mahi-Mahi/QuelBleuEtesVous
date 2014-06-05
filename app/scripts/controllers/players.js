'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('PlayersCtrl', function(debug, baseurl, $scope, dataService) {

		$scope.slider = {
			players: dataService.data.players.players,
			opened: false,
			before: function() {
				this.opened = true;
				// jQuery('.flex-viewport').show();
			},
			close: function() {
				this.opened = false;
				// jQuery('.flex-viewport').hide();
			}
		};

	});