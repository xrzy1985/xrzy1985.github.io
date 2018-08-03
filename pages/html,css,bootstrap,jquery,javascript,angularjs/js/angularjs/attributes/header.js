// HEADER
// here we are using our contorller, ctrl_header
// and a factory function to get the controller ready to use
// scope is used to tell angular to automatically pass in the data required

// AngularJS controllers control the application
app1.controller('ctrl_header', function($scope){
	
	// The information will be served via the james object
	$scope.james = 
	{
		first_name: "James", 
		last_name: "Patterson", 
		info: "Kennesaw State University | College of Computing and Software Engineering"
	};
	
	$scope.full_name = $scope.james.first_name + ' ' + $scope.james.last_name;
	
	$scope.header_info = $scope.james.info;
	
})