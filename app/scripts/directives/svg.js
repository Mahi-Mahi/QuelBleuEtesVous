'use strict';

angular.module('quelBleuEtesVousApp')
	.directive('ngX', function() {
		return function(scope, elem, attrs) {
			attrs.$observe('ngX', function(x) {
				elem.attr('x', x);
			});
		};
	})
	.directive('ngY', function() {
		return function(scope, elem, attrs) {
			attrs.$observe('ngY', function(y) {
				elem.attr('y', y);
			});
		};
	})
	.directive('ngWidth', function() {
		return function(scope, elem, attrs) {
			attrs.$observe('ngWidth', function(width) {
				elem.attr('width', width);
			});
		};
	})
	.directive('ngHeight', function() {
		return function(scope, elem, attrs) {
			attrs.$observe('ngHeight', function(height) {
				elem.attr('height', height);
			});
		};
	})
	.directive('ngTranslate', function() {
		return function(scope, elem, attrs) {
			attrs.$observe('ngTranslate', function(translate) {
				elem.attr('transform', "translate(" + translate + ")");
			});
		};
	});