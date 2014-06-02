'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('PlayersCtrl', function($scope, dataService) {

		$scope.players = dataService.data.players.players;

		$scope.startFlexSlider = function(idx) {
			console.log("startFlexSlider(" + idx);
		};
	});