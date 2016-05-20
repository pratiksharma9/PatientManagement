var controllers = angular.module('appointment_controllers', ['ngRoute', 'ngResource']);

controllers.controller('AppointmentCtrl', ['$scope', '$rootScope', 'Appointment', '$location', '$routeParams', '$http', '$route', function ($scope, $rootScope, Appointment, $location, $routeParams, $http, $route) 
{
	if($location.path() == "/appointments")
	{
		$scope.allAppointments = Appointment.query(function(data){
			$rootScope.current_user_id = $scope.allAppointments.id;
		});
	}

	$scope.appointmentConfirmByDoctor = function(appointment_id, appointment_time){
    		$scope.message = Appointment.update({id: appointment_id},{doctor_confirm_time: appointment_time, status: "Confirmed"});    		
     		$route.reload();	
	};

	$scope.cancelByDoctor = function(id){
    		$scope.message = Appointment.update({id: id},{doctor_confirm_time: null, status: "Canceled"});
    		$route.reload();
	};

	$scope.showbox = function($index) {
		$scope.showbox[$index] = !$scope.showbox[$index];
    };

    $scope.editdate = function(id, patient_date){
    	$scope.message = Appointment.update({id: id},{patient_date: patient_date, status: "EditDate"});
    	$route.reload();
    }; 

}]);