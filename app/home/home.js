'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCrtl'
  });
}])

.controller('homeCrtl', ['$scope', function($scope) {
	$scope.holaMundo = "Algarra Chupala desde el home";
}]);