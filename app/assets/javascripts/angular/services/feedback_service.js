var services = angular.module('feedback_services', []);

services.factory('Feedback', ['$resource', function($resource){
	return $resource('/feedbacks/:id.json', {},{
		query: { method: 'GET', isArray: true},
		save: { method: 'POST'},
		get: { method: 'GET'},
		update: {method: 'PUT', params: {id: '@id'} },
		delete: { method: 'DELETE', params: {id: '@id'} }
	})
}]);