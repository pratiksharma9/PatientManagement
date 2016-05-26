var controllers = angular.module('doctor_controllers', ['ngRoute', 'ngResource']);

controllers.directive('professionsInfo', function(){
	return {
		restrict: 'A',
		templateUrl: function(elem, attr){
			return 'angular/templates/doctors/professions-info.html'
		}
	};
});

controllers.filter('customFilter', function() {
 return function(input, filterEach, exclude) {

   filterEach.forEach(function(item) {
     if (angular.equals(item, exclude)) { return; }
       input = input.filter(function(value) {
         return item !== value.name;
       });
   });
   return input;
 };
});

controllers.controller('DoctorsCtrl', ['$scope', 'Doctor', 'Feedback', 'Appointment', 'Profession', '$location', '$timeout', '$routeParams', '$route', '$http', function ($scope, Doctor, Feedback, Appointment, Profession, $location, $timeout, $routeParams, $route, $http) 
{
	var id = $routeParams.id;

	// Doctor Profile After Login
	if ($location.path() == "/doctors/" + id + "/profile")
	{
			Doctor.getProfile({id: id}, function(data) {
				
				if(data.msg == "Profile Not Found")
				{
					$location.path('/doctors/'+data.id+'/profile');
				}
				else
				{
					$scope.doctor = data.doctor;
					$scope.professions = data.professions;
					
					var doctorYear = new Date(data.doctor.dob).getFullYear();
					var r = new Date().getFullYear();
					$scope.forExperience = new Array((r - doctorYear) - 25);
				}
				
			});
	};
	
	// Update Doctor Profile
	$scope.docUpdateRec = function (doctor_record, myForm) {
		if (myForm.$valid)
		{
			$scope.updateValues = Doctor.update({id: id}, {doctor: doctor_record, tocheck: 'UpdateProfile'});
			$route.reload();
		};
	};

	// Doctor list on patient Login
	if($location.path() == "/doctors")
	{
		Doctor.query({},function(data) {
			$scope.doctors = data;
		});
	};
	
	// Doctor Discription + feedback on patient login
	if($location.path() == "/doctors/" + id) 
	{
		Doctor.get({id: id}, function(data) {
			$scope.doctor = data.doctor_profile;
			$scope.currentUserId = data.current_user_id;
			
			if(data.msg == "Doctor Profile Not Found")
			{
					$location.path('/doctors');
			}
		});
	};

	// Hide and Show Box
	$scope.showBox = function($index) {
     	$scope.showBox[$index] = !$scope.showBox[$index];
   };

  // Patient Take Appointment
	$scope.takeAppointment = function (doctor_id, patient_date) {
		$scope.message = Appointment.update({id: doctor_id}, {doctor_id: doctor_id, patient_date: patient_date, status: "Pending"});
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
	
	// Speciality with ng-repeat
	
	$scope.availableOptions = [
		{name: 'Audiologist', id: 1},{name: 'Allergist', id: 2},{name: 'Cardiologist', id: 3},{name: 'Dentist', id: 4},{name: 'Dermatologist', id: 5},{name: 'Endocrinologist', id: 6},
		{name: 'Epidemiologist', id: 7},{name: 'Gynecologist', id: 8},{name: 'Immunologist', id: 9},{name: 'Internal Medicine Specialist', id: 10},{name: 'Microbiologist', id: 11},
		{name: 'Neonatologist', id: 12},{name: 'Neurologist', id: 13},{name: 'Neuro Surgeon', id: 14},{name: 'Obstetrician', id: 15},{name: 'Oncologist', id: 16},{name: 'Orthopedic', id: 17},
		{name: 'Pediatrician', id: 18},{name: 'Physiologist', id: 19},{name: 'Plastic Surgeon', id: 20},{name: 'Podiatrist', id: 21},{name: 'Radiologist', id: 22},{name: 'Rheumatologist', id: 23},
		{name: 'Surgeon', id: 24}, {name: 'Urologist', id: 25}
	];
    
	$scope.selected = [];
    
    	
	// Profession
	$scope.addProfession = function(profession, proessionFrom){
		if(proessionFrom.$valid)
		{
				$scope.message = Profession.save({profession: profession}, function(data){
						$scope.professionMsgs = data.professions;
				});
				
				$timeout(function(){ 
					$route.reload();
				}, 3000);
		}
	};
	
	/* Adding Fields */
	$scope.professionFields = [{speciality: null, experience: null, fee: null}];
	
	$scope.addProfessionTextBox = function(){
		var newItemNo = $scope.professionFields.length+1;
    $scope.professionFields.push({speciality: null, experience: null, fee: null});
  };
	
	$scope.removeProfessionTextBox = function(index) {
    $scope.professionFields.splice(index, 1);
  };
  // ---------------
  
  
  // Profession Methods
  $scope.deleteProfession = function(id){
			Profession.delete({id});
			$route.reload();
	};
	
	$scope.updateProfession = function(id, profession, professionForm){
		if(professionForm.$valid)
		{
			Profession.update({id, profession});
			$route.reload();
		}
	};
	
	$scope.enableBox = function($index){
		$scope.enableBox[$index] = !$scope.enableBox[$index];
	};
	
	$scope.validateSpeciality = function(data){
			console.log(data);
	};
}]);
