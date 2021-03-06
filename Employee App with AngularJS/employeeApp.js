
var app = angular.module('employeeApp', []);

app.controller('customersController', function($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) 
	{
		$scope.employees = response.employees;
	});
	
	
	$scope.addUser = function()
	{
	  var newEmp = {
	     "name": $scope.newName,
		 "class": $scope.newSkill
	  };
	   $scope.employees.push(newEmp);
	}
	
	$scope.editUser = function(name)
	{
	 for(i in $scope.employees) {
            if($scope.employees[i].name == name) {
            $scope.newName = $scope.employees[i].name;
			 $scope.newSkill = $scope.employees[i].class;
			 $scope.temp_id = $scope.employees[i].id;
            }
        }  
	
	}
	
	$scope.saveEditChanges = function()
	{
       for(i in $scope.employees) {
            if($scope.employees[i].id ==  $scope.temp_id) {
               $scope.employees[i].name =  $scope.newName;
		       $scope.employees[i].class = 	 $scope.newSkill;
            }
        }  		
	}
	
	$scope.deleteUser = function(name)
	{
	 for(i in $scope.employees) {	 
		
		if (confirm("Are you sure you want to delete?") == true) {
		if($scope.employees[i].name == name) {
           $scope.employees.splice(i,1);       
    } }else {
       $scope.x = "You pressed Cancel!";
    }                   
        }  
	
	}
	
});

sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'templates/add-order.html',
        controller: 'AddOrderController'
      }).
      when('/showOrders', {
        templateUrl: 'templates/show-orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);



/*
function customersController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}
*/
