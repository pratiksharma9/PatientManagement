var controllers = angular.module('patient_controllers', ['ngRoute', 'ngResource']);

controllers.controller('PatientCtrl', ['$scope', 'Patient', '$location', '$routeParams', '$http', function ($scope, Patient, $location, $routeParams, $http) 
{

	var id = $routeParams.id;
	$scope.patient = Patient.get({id: id}, function(data){
		if(data.msg == "Profile Not Found")
		{
			$location.path('/patients/'+ data.id);
		}
	});
	

	$scope.updatePatientRec = function (patient_record, myForm) {
		var id = $routeParams.id;
		if(myForm.$valid)
 		{ 
			$scope.updateValues = Patient.update({id: id}, {patient: patient_record});
			$location.path('/patients/' + patient_record.id);
		}
	};

}]);

