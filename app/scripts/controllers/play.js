'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('PlayCtrl', function(debug, $rootScope, $scope, $location, $timeout, dataService) {

		$rootScope.userAnswers = $rootScope.userAnswers || [];

		$scope.currentQuestion = 0;

		$scope.questions = dataService.data.questions.questions;

		$scope.showQuestion = true;

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

		$scope.animateField = function() {
			$timeout($scope.nextQuestion, debug ? 50 : 1000);
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

		fakeAnswer();

	});