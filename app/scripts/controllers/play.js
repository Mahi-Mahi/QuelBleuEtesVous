'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('PlayCtrl', function($rootScope, $scope, $location, $timeout) {

		$rootScope.userAnswers = $rootScope.userAnswers || [];

		$scope.currentQuestion = 0;

		$scope.questions = [];

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
			$timeout($scope.nextQuestion, 1000);
		};

		$scope.nextQuestion = function() {
			$scope.showQuestion = true;
			$rootScope.userAnswers.push($scope.selectedAnswer);
			$scope.currentQuestion++;
			if ($scope.currentQuestion >= $scope.questions.length) {
				$location.url('/resultat');
			} else {
				//
			}
		};

	});