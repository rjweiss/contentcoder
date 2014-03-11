// public/core.js
var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	//$scope.label = function() {
  //	$http.post('/api/documents', $scope.documents).success(function(data) {
  //  	console.log(data);
  //	});
	//};

	$http.get('/api/articles').success(function(data) {
		$scope.articles = data;
		console.log(data);
	});

}

