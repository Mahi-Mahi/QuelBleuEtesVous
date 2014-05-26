'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('PlayCtrl', function($rootScope, $scope, $location, $timeout) {

		$rootScope.userAnswers = $rootScope.userAnswers || [];

		$scope.currentQuestion = 0;

		$scope.questions = [{
			display: 'mosaic',
			title: "Si l'on faisait un film de votre vie professonnelle, quel serait-il ?",
			answers: [{
				val: 'A',
				title: "<strong>La vie est un long fleuve tranquille,</strong> un échelon l'un après l'autre, sans vague ni remous."
			}, {
				val: 'B',
				title: "<strong>There Will Be Blood</strong> embûches, coups de sang, ça s'en va et ça revient."
			}]
		}, {
			display: 'list',
			title: "Pour vous le détail qui tue, c'est ...",
			answers: [{
				val: 'A',
				title: "<strong>Une grosse voiture,</strong> ses ailerons, son bas de caisse et sa sono à 300 décibels"
			}]
		}];

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