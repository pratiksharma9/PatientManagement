
var controllers = angular.module('patient_controllers', ['ngRoute', 'ngResource']);

controllers.controller('PatientCtrl', ['$scope', 'Patient', '$location', '$routeParams', '$http', function ($scope, Patient, $location, $routeParams, $http) 
{

	var id = $routeParams.id;
	$scope.patient_record = Patient.get({id: id});
	console.log($scope.patient_record);

	$scope.updatePatientRec = function (patient_record) {

 		var id = $routeParams.id;
 		$scope.updateValues = Patient.update({id: id}, {patient: patient_record});
 		alert("Account Updated");
 		$location.path('/patients/' + patient_record.id);
	};

}]);

