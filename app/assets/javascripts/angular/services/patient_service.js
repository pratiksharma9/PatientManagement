var services = angular.module('patient_services', []);

services.factory('Patient', ['$resource', function($resource){
	return $resource('/patients/:id.json', {},{
		query: { method: 'GET', isArray: false},
		save: { method: 'POST' },
		get: { method: 'GET'},
 		update: { method: 'PUT', params: {id: '@id'} },
 		delete: { method: 'DELETE', params: {id: '@id'} }
	})
}]);
