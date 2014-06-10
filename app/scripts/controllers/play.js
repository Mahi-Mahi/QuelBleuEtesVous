'use strict';
/* global ga */
/* global jQuery */

angular.module('quelBleuEtesVousApp')
	.controller('PlayCtrl', function(prod, config, $rootScope, $scope, $location, $timeout, $interval, dataService, $routeParams) {

		$scope.debug = (false && !prod) || ($routeParams.debug);

		$scope.baseurl = config.baseurl;

		dataService.load('answers');
		dataService.load('players');

		var IE8 = jQuery('html.lt-ie9').length;
		var smallScreen = window.innerWidth < 940;

		var skipAnimation = IE8 || smallScreen;

		$scope.players = [{
			id: "player-ref",
			x: 350,
			y: 188,
			'class': "referee",
			Ac: {
				x: 365,
				y: 235
			},
			Bc: {
				x: 365,
				y: 235
			}
		}, {
			id: "player-1",
			x: 320,
			y: 220
		}, {
			id: "player-2",
			x: 440,
			y: 360
		}, {
			id: "player-3",
			x: 140,
			y: 380
		}, {
			id: "player-4",
			'class': "goalkeeper",
			x: 40,
			y: 210
		}, {
			id: "player-5",
			x: 190,
			y: 200
		}, {
			id: "player-6",
			x: 110,
			y: 50,
			Ac: {
				x: 280,
				y: 40
			},
			Bc: {
				x: 320,
				y: 40
			}
		}, {
			id: "player-7",
			x: 430,
			y: 80
		}, {
			id: "player-8",
			x: 300,
			y: 100,
			Ac: {
				x: 450,
				y: 135
			},
			Bc: {
				x: 490,
				y: 130
			}
		}, {
			id: "player-9",
			x: 590,
			y: 50,
			Ac: {
				x: 635,
				y: 160
			},
			Bc: {
				x: 650,
				y: 200
			}
		}, {
			id: "player-10",
			x: 620,
			y: 370
		}, {
			id: "player-11",
			x: 530,
			y: 190
		}, {
			id: "goal",
			'class': "goal",
			x: 710,
			y: 210
		}];

		$scope.lines = [];
		for (var i = 0; i < $scope.players.length - 1; i++) {
			var p = [],
				path = '';
			var h = 18;
			var w = 18;
			var Ac, Bc;
			var A = {
				x: $scope.players[i].x + h,
				y: $scope.players[i].y + w,
			};
			var B = {
				x: $scope.players[i + 1].x + h,
				y: $scope.players[i + 1].y + w
			};
			if ($scope.players[i].Ac) {
				Ac = $scope.players[i].Ac;
				Bc = $scope.players[i].Bc;
			} else {
				Ac = {
					x: A.x,
					y: A.y
				};
				Bc = {
					x: B.x,
					y: B.y
				};
			}
			p.push("M" + A.x + "," + A.y);
			p.push("C" + Ac.x + "," + Ac.y);
			p.push("," + Bc.x + "," + Bc.y);
			p.push("," + B.x + "," + B.y);
			path = p.join('');
			$scope.lines.push({
				id: (i + 1),
				d: path
			});
		}

		// $scope.lines = [{
		// 	id: 'line-1',
		// 	path: "M350,188C100,100,100,100,320,220"
		// }];

		$rootScope.userAnswers = [];

		$scope.currentQuestion = -1;
		$scope.state = '';

		$scope.questions = dataService.data.questions.questions;

		$scope.nextQuestionLink = "Question Suivante";
		$scope.showQuestion = false;

		$interval(function() {
			jQuery("svg .players g").each(function(idx, item) {
				jQuery(item).attr('class', jQuery(item).attr('myclass'));
			});
			jQuery("svg .lines path").each(function(idx, item) {
				jQuery(item).attr('class', jQuery(item).attr('myclass'));
			});
		}, 50);

		$scope.animateField = function() {
			$scope.state = 'play_anim';

			$timeout(function() {
				$scope.state = '';
				$scope.nextQuestion();
			}, $scope.debug || skipAnimation ? 50 : 800);
		};

		$scope.selectAnswer = function(answer) {
			$scope.selectedAnswer = answer;
		};
		$scope.answerClass = function(answer) {
			return answer === $scope.selectedAnswer ? 'active' : '';
		};

		$scope.setAnswer = function() {

			ga('send', 'event', 'answer', $scope.currentQuestion + '. ' + $scope.questions[$scope.currentQuestion].slug, $scope.selectedAnswer.title);

			$scope.showQuestion = false;
			$scope.animateField();
		};

		$scope.nextQuestion = function() {

			$scope.nextQuestionLink = ($scope.currentQuestion < 10) ? "Question Suivante" : " Voir le résultat";

			$scope.currentQuestion++;

			if ($scope.selectedAnswer) {
				$rootScope.userAnswers.push($scope.selectedAnswer);
			}

			$scope.selectedAnswer = null;

			if ($scope.currentQuestion >= $scope.questions.length) {
				$location.url('/optin');
				return;
			}

			$timeout(function() {
				$scope.showQuestion = true;
			}, skipAnimation ? 50 : 500);

			$timeout(function() {
				fakeAnswer();
			}, 250);

		};

		function fakeAnswer() {
			if ($scope.debug) {

				if ($scope.questions[$scope.currentQuestion]) {
					var answer = Math.floor(Math.random() * $scope.questions[$scope.currentQuestion].answers.length);
					$scope.selectedAnswer = $scope.questions[$scope.currentQuestion].answers[answer];

					if (dataService.data.answers.answers[$routeParams.debug]) {
						// console.log("question #" + $scope.currentQuestion + " :" + $scope.questions[$scope.currentQuestion].slug);
						answer = dataService.data.answers.answers[$routeParams.debug][$scope.questions[$scope.currentQuestion].slug];
						angular.forEach($scope.questions[$scope.currentQuestion].answers, function(value) {
							if (value.slug === answer) {
								$scope.selectedAnswer = value;
							}

						});
						console.log($scope.currentQuestion + ' / ' + $scope.selectedAnswer.slug + '. ' + $scope.selectedAnswer.title + ' (' + $scope.selectedAnswer.coord1 + '/' + $scope.selectedAnswer.coord2);
					}
					$scope.setAnswer();
				}

			}

		}

		if ($scope.debug) {
			$timeout(function() {
				console.log(dataService.data.answers.answers[$routeParams.debug]);
				fakeAnswer();
			}, 500);
		}

		$timeout(function() {
			jQuery('.main-inner-play').addClass('ready');
		}, 50);

		$timeout(function() {
			$scope.animateField();
		}, ($scope.debug || skipAnimation) ? 50 : 1000);

	});