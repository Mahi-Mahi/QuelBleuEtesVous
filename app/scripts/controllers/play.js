'use strict';

angular.module('quelBleuEtesVousApp')
	.controller('PlayCtrl', function(prod, config, $rootScope, $scope, $location, $timeout, dataService) {

		var debug = true && prod;

		$scope.baseurl = config.baseurl;

		$scope.players = [{
			id: "player-ref",
			x: 350,
			y: 188,
			class: "referee",
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
			class: "goalkeeper",
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
			class: "goal",
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

		$rootScope.userAnswers = $rootScope.userAnswers || [];

		$scope.currentQuestion = -1;
		$scope.state = '';

		$scope.questions = dataService.data.questions.questions; //.slice(0, debug);

		$scope.showQuestion = false;

		$scope.initField = function() {
			$timeout(function() {
				$scope.animateField();
			}, debug ? 50 : 1000);
		};

		$scope.animateField = function() {
			$scope.state = 'play_anim';

			$timeout(function() {
				$scope.state = '';
				$scope.nextQuestion();
			}, debug ? 50 : 1000);
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
			}, 500);

			fakeAnswer();

		};

		function fakeAnswer() {
			if (debug) {
				$timeout(function() {
					if ($scope.questions[$scope.currentQuestion]) {
						var rand = Math.floor(Math.random() * $scope.questions[$scope.currentQuestion].answers.length);
						console.log('answer :' + rand);
						$scope.selectedAnswer = $scope.questions[$scope.currentQuestion].answers[rand];
						$scope.setAnswer();
					}
				}, 50);
			}

		}

		$scope.initField();

		fakeAnswer();

	});