'use strict';

angular.module('quelBleuEtesVousApp')
	.factory('dataService', function($http, $q, config) {
		return {
			data: {},
			load: function(id) {
				var defer = $q.defer();
				var data = this.data;

				$http.get(config.baseurl + '/data/' + id + '.json')
					.success(function(response) {
						data[id] = response;
						defer.resolve(response);
					});

				return defer.promise;
			}
		};
	});

// '/backend/optin.php'