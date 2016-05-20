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


	






















































































// services.config([
//  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 	
//  	$routeProvider.when('/doctorslists', {
//  		templateUrl: 'angular/templates/patients/doctorslists.html',
//  		controller: 'doctorslistsCtrl'
//  	})
//  	.when('/patients',{
//     	templateUrl: 'angular/templates/patients/index.html',
//     	controller: 'PatientCtrl'
//  	})
//  	.when('/patients/:id', {
//  		templateUrl: 'angular/templates/patients/show.html',
//  		controller: 'PatientCtrl'
//  	})
//  	.when('/patients/:id/edit', {
//  		templateUrl: 'angular/templates/patients/edit.html',
//  		controller: 'PatientCtrl'
//  	})
//  	.otherwise({
//         redirectTo: '/errors'
//     });
 	

 	
//  	$locationProvider.html5Mode(true);
//  }
// ]);