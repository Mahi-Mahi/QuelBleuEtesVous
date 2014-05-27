'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('PlayCtrl', function($rootScope, $scope, $location, $timeout, dataService) {

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
			$timeout($scope.nextQuestion, 1000);
		};

		$scope.nextQuestion = function() {

			$rootScope.userAnswers.push($scope.selectedAnswer);

			console.log($rootScope.userAnswers);

			$scope.currentQuestion++;
			if ($scope.currentQuestion >= $scope.questions.length) {
				$location.url('/resultat');
			} else {
				//
			}

			$scope.showQuestion = true;

			$timeout(function() {
				answers = document.querySelector('#id');
				nb_answer = angular.element(answers).find('li').length;
			}, 1000);

		};

	});