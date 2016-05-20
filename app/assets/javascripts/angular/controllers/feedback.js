var controllers = angular.module('feedback_controllers', ['ngRoute', 'ngResource']);

controllers.controller('FeedbackCtrl', ['$scope', 'Feedback', '$location', '$routeParams', '$route', '$http', function ($scope, Feedback, $location, $routeParams, $route, $http )
{
	if($location.path() == "/feedbacks")
	{
		Feedback.query(function(data){
			$scope.doctor_feedbacks = data;
		});
	}

}]);