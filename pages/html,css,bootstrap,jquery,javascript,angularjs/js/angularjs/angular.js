var app1 = angular.module('app1', []);

// HEADER
// here we are using our contorller, ctrl_header_name
// and a factory function to get the controller ready to use
// scope is used to tell angular to automatically pass in the scope object
app1.controller('ctrl_header', function($scope){
	
	$scope.first_name = "James";
	$scope.last_name = "Patterson";
	$scope.full_name = $scope.first_name + ' ' + $scope.last_name;
	$scope.header_info = "Kennesaw State University | College of Computing and Software Engineering";
	
})