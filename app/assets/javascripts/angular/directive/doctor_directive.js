var directives = angular.module('doctor_directives', ['ngRoute', 'ngResource']);

directives.directive('professionsInfo', function(){
  return {
    restrict: 'E',
    templateUrl: 'angular/templates/doctors/professions-info.html'
    };
});
