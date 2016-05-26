var controllers = angular.module('appointment_controllers', ['ngRoute', 'ngResource']);

controllers.controller('AppointmentCtrl', ['$scope', 'Appointment', '$location', '$routeParams', '$http', '$route', function ($scope, Appointment, $location, $routeParams, $http, $route) 
{

	if($location.path() == "/appointments")
	{
		Appointment.query(function(data) {
			$scope.appointments = data.record;
			$scope.appointmentsFor = data.for;
			
			var current_date = new Date();
			$scope.currentDate = current_date;
			
		});
	}

	$scope.appointmentConfirmByDoctor = function(appointment_id, appointment_time, patient_date){
		
		var date_time_concat = patient_date +"T"+ appointment_time;
		
		var patient_concat_date = new Date(date_time_concat);
		var current_date = new Date();
		
		console.log(current_date.getTime() < patient_concat_date.getTime());
			
		if(current_date.getTime() < patient_concat_date.getTime())
		{
				$scope.message = Appointment.update({id: appointment_id},{doctor_confirm_time: appointment_time, status: "Confirmed"});    		
				$route.reload();
		}		
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
