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
			var shareText = 'Quel Bleu êtes-vous ? Faites le test !';
			elem.attr('href', 'https://twitter.com/intent/tweet?&hashtags=edf,CM2014&via=franceinfo&text=' + encodeURIComponent(shareText) + '&url=' + encodeURIComponent([document.location.protocol, '//', document.location.host, document.location.pathname].join('')));
		};
	})
	.directive('ngShareFacebook', function() {
		return function(scope, elem) {
			// var shareText = 'Quel Bleu êtes-vous ? Faites le test !';

			elem.attr('href', 'https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&sdk=joey&u=' + encodeURIComponent([document.location.protocol, '//', document.location.host, document.location.pathname].join('')));

			// elem.attr('href', 'https://www.facebook.com/sharer/sharer.php?t=' + encodeURIComponent(shareText) + '&amp;u=' + encodeURIComponent([document.location.protocol, '//', document.location.host, document.location.pathname].join('')));

		};
	});