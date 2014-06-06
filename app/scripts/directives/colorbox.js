'use strict';
/* global jQuery */

angular.module('quelBleuEtesVousApp')
	.directive('ngColorbox', function() {
		return function(scope, elem) {
			elem.bind('click', function(e) {
				e.preventDefault();

				var attrs = {
					inline: true,
					href: '#credits'
				};

				jQuery.colorbox(attrs);

				return false;
			});
		};
	});