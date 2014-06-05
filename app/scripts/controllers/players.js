'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('PlayersCtrl', function(prod, config, $scope, dataService) {

		var debug = false && prod;

		$scope.baseurl = config.baseurl;

		console.log(dataService.data.players.players);

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