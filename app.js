var app = angular.module("myApp", []);

app.controller("firstController", function($scope) {
	

	$scope.peopleArr = [
	{name: 'Paul Chatterton', age: 28},
	{name: 'Kallene Chatterton', age: 27},
	{name: 'Jane Chatterton', age: 1}
	]

	$scope.addPerson = function() {
		var timeStamp = new Date();
		$scope.newPerson.dateAdded = timeStamp;
		$scope.peopleArr.push($scope.newPerson);
		$scope.newPerson = "";
	}
});

