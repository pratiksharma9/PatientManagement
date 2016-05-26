var services = angular.module('appointment_services', []);

services.factory('Appointment', ['$resource', function($resource){
	return $resource('/appointments/:id.json', {},{
		query: { method: 'GET', isArray: false},
		save: { method: 'POST'},
		get: { method: 'GET'},
		update: { method: 'PUT', params: {id: '@id'} },
		delete: { method: 'DELETE', params: {id: '@id'} }
	})
}]);