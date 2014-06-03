'use strict';

angular.module('quelBleuEtesVousApp')
	.directive('ngSharePopup', function() {
		return function(scope, elem, attrs) {
			elem.bind('click', function(e) {
				e.preventDefault();
				window.open(jQuery(this).attr('href'), 'share_popup', 'status=1,width=580,height=400,top=' + ($(window).height() - 400) / 2 + ',left=' + ($(window).width() - 580) / 2 + ',scrollbars=no');
				return false;
			});

		};
	})
	.directive('ngShareGoogle', function() {
		return function(scope, elem, attrs) {
			elem.attr('href', 'https://plus.google.com/share?url=' + [document.location.protocol, '//', document.location.host, document.location.pathname].join(''));
		};
	})
	.directive('ngShareTwitter', function() {
		return function(scope, elem, attrs) {
			elem.attr('href', 'https://twitter.com/intent/tweet?&hashtag=&via=radiofrance&text=&url=' + [document.location.protocol, '//', document.location.host, document.location.pathname].join(''));
		};
	})
	.directive('ngShareFacebook', function() {
		return function(scope, elem, attrs) {
			elem.attr('href', 'https://www.facebook.com/sharer/sharer.php?t=&amp;u=' + [document.location.protocol, '//', document.location.host, document.location.pathname].join(''));
		};
	});