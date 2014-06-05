'use strict';
/* global jQuery*/

angular.module('quelBleuEtesVousApp')
	.directive('ngSharePopup', function() {
		return function(scope, elem) {
			elem.bind('click', function(e) {
				e.preventDefault();
				window.open(jQuery(this).attr('href'), 'share_popup', 'status=1,width=580,height=400,top=' + (jQuery(window).height() - 400) / 2 + ',left=' + (jQuery(window).width() - 580) / 2 + ',scrollbars=no');
				return false;
			});
		};
	})
	.directive('ngShareGoogle', function() {
		return function(scope, elem) {
			elem.attr('href', 'https://plus.google.com/share?url=' + encodeURIComponent([document.location.protocol, '//', document.location.host, document.location.pathname].join('')));
		};
	})
	.directive('ngShareTwitter', function() {
		return function(scope, elem) {
			elem.attr('href', 'https://twitter.com/intent/tweet?&hashtag=&via=radiofrance&text=&url=' + encodeURIComponent([document.location.protocol, '//', document.location.host, document.location.pathname].join('')));
		};
	})
	.directive('ngShareFacebook', function() {
		return function(scope, elem) {
			elem.attr('href', 'https://www.facebook.com/sharer/sharer.php?t=&amp;u=' + encodeURIComponent([document.location.protocol, '//', document.location.host, document.location.pathname].join('')));
		};
	});