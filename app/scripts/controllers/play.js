'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('PlayCtrl', function(debug, $rootScope, $scope, $location, $timeout, dataService) {

		debug = false;

		$scope.players = [{
			id: "player-ref",
			pos: "350,188",
			class: "referee"
		}, {
			id: "player-1",
			pos: "320,220"
		}, {
			id: "player-2",
			pos: "440,360"
		}, {
			id: "player-3",
			pos: "140,380"
		}, {
			id: "player-4",
			class: "goalkeeper",
			pos: "40,210"
		}, {
			id: "player-5",
			pos: "190,200"
		}, {
			id: "player-6",
			pos: "110,50"
		}, {
			id: "player-7",
			pos: "430,80"
		}, {
			id: "player-8",
			pos: "300,100"
		}, {
			id: "player-9",
			pos: "580,50"
		}, {
			id: "player-10",
			pos: "620,370"
		}, {
			id: "player-11",
			pos: "530,190"
		}];

		$rootScope.userAnswers = $rootScope.userAnswers || [];

		$scope.currentQuestion = -1;

		$scope.questions = dataService.data.questions.questions.slice(0, 3);

		$scope.showQuestion = false;

		$scope.initField = function() {
			$timeout(function() {
				$scope.animateField();
			}, debug ? 50 : 1000);
		};

		$scope.animateField = function() {
			$timeout($scope.nextQuestion, debug ? 50 : 1000);
		};

		$scope.selectAnswer = function(answer) {
			$scope.selectedAnswer = answer;
		};
		$scope.answerClass = function(answer) {
			return answer === $scope.selectedAnswer ? 'active' : '';
		};

		$scope.setAnswer = function() {
			$scope.showQuestion = false;
			$scope.animateField();
		};

		$scope.nextQuestion = function() {

			$rootScope.userAnswers.push($scope.selectedAnswer);

			$scope.currentQuestion++;
			if ($scope.currentQuestion >= $scope.questions.length) {
				$location.url('/optin');
				return;
			}

			$scope.showQuestion = true;

			fakeAnswer();

		};

		function fakeAnswer() {
			if (debug) {
				$timeout(function() {
					var rand = Math.floor(Math.random() * $scope.questions[$scope.currentQuestion].answers.length);
					$scope.selectedAnswer = $scope.questions[$scope.currentQuestion].answers[rand];
					$scope.setAnswer();
				}, 50);
			}

		}

		// $scope.initField();

		fakeAnswer();

	});