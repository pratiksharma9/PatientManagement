var controllers = angular.module('doctor_controllers', ['ngRoute', 'ngResource']);

controllers.controller('DoctorsCtrl', ['$scope', 'Doctor', 'Feedback', 'Appointment', '$location', '$routeParams', '$route', '$http', function ($scope, Doctor, Feedback, Appointment, $location, $routeParams, $route, $http ) 
{
	
	var current_id;
	var id = $routeParams.id;

	// Doctor Profile After Login
	if ($location.path() == "/doctors/" + id + "/profile")
	{
		Doctor.getProfile({id: id}, function(data) {
			$scope.doctor_record = data;
		})
	}
	
	// Update Doctor Profile
	$scope.docUpdateRec = function (doctor_record, myForm) {
		
		if (myForm.$valid)
		{
			$scope.updateValues = Doctor.update({id: id}, {doctor: doctor_record, tocheck: 'UpdateProfile'});
			console.log($scope.updateValues);
			$route.reload();
		}
	}

	// Doctor list on patient Login
	if($location.path() == "/doctors")
	{
		Doctor.query({},function(data) {
			$scope.doctors_lists = data;
		});
	}
	
	// Doctor Discription + feedback on patient login
	if($location.path() == "/doctors/" + id) {
		Doctor.get({id: id}, function(data) {
			$scope.doctor_desc = data.doctor_profile;
			$scope.current_id = data.current_id;
		});
	}

	// Hide and Show Box
	$scope.showbox = function($index) {
     	$scope.showbox[$index] = true;
    };

    // Patient Take Appointment
	$scope.takeAppointment = function (doctor_id, patient_date) {

		$scope.message = Appointment.update({id: doctor_id}, {doctor_id: doctor_id, patient_date: patient_date, status: "Pending"});
    	// $route.reload();	
	};

	// Create Feedback Patient Module
	$scope.createFeedback = function (doctor_id, content){
		Feedback.save({doctor_id: doctor_id, content: content});
		$route.reload();
	};

	// delete feedback Patient module
	$scope.deleteFeedback = function(feedback_id){
		Feedback.delete({id: feedback_id});
		$route.reload();
	};

	$scope.updateFeedback = function(feedback_id, content){
		Feedback.update({id: feedback_id, content: content});
		$route.reload();
	};

}]);