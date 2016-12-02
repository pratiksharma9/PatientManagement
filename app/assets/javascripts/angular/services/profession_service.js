var services = angular.module('profession_services', []);

services.factory('Profession', ['$resource', function($resource){
	return $resource('/professions/:id.json',{},{
		query: { method: 'GET', isArray: true},
		update: {method: 'PUT', params: {id: '@id'}},
		delete: { method: 'DELETE', params: {id: '@id'} }
	})
}]);
