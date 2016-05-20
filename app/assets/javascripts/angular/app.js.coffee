@patient_management = angular.module('PatientManagement',[
	'ngRoute',
	'ngResource',
	'templates',
		
	'patient_controllers',
	'appointment_controllers',
	'doctor_controllers',
	'feedback_controllers',

	'feedback_services',
	'doctor_services',
	'appointment_services',
	'patient_services'
])

@patient_management.config(['$httpProvider' , ($httpProvider)-> 
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content') ])  
 


@patient_management.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
      
	$routeProvider.when("/patients", {templateUrl: "angular/templates/patients/index.html", controller: 'PatientCtrl'})

	$routeProvider.when("/patients/:id", {templateUrl: "angular/templates/patients/show.html", controller: "PatientCtrl"})

	$routeProvider.when("/patients/:id/edit", {templateUrl: "angular/templates/patients/edit.html", controller: "PatientCtrl"})

	$routeProvider.when("/doctors", {templateUrl: "angular/templates/doctors/index.html", controller: 'DoctorsCtrl'})

	$routeProvider.when("/doctors/:id", {templateUrl: "angular/templates/doctors/show.html", controller: 'DoctorsCtrl'})

	$routeProvider.when("/doctors/:id/profile", {templateUrl: "angular/templates/doctors/profile.html", controller: 'DoctorsCtrl'})

	$routeProvider.when("/appointments", {templateUrl: "angular/templates/appointments/index.html", controller: 'AppointmentCtrl'})

	$routeProvider.when("/feedbacks", {templateUrl: "angular/templates/feedbacks/index.html", controller: 'FeedbackCtrl'} )

	$locationProvider.html5Mode(true);
])

@patient_management.run( -> 
	console.log 'angular app running' )

