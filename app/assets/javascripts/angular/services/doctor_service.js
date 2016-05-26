var services = angular.module('doctor_services', []);

services.factory('Doctor', ['$resource', function($resource){
	return $resource('/doctors/:id.json', {},{
		query: { method: 'GET', isArray: true},
		save: { method: 'POST'},
		get: { method: 'GET'},
		update: {method: 'PUT', params: {id: '@id'} },
		delete: { method: 'DELETE', params: {id: '@id'} },
		getProfile: {url: '/doctors/:id/profile.json', method: 'GET', params: {id: '@id'}} 			
	})
}]);