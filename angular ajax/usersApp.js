
var app = angular.module('usersApp', []);

/* app.controller('usersController', function($scope,$http) {
   $http({
	  method: 'GET',
      url: "http://jsonplaceholder.typicode.com/users",
      dataType: ""
    }).success(function(data) {
      $scope.users = data;
	  $http.get("http://jsonplaceholder.typicode.com/albums")
		.success(function(response) 
		{
			$scope.albums = response;
		});
    });*/
	
app.controller('usersController', function($scope,$http) {
    $http.get("http://jsonplaceholder.typicode.com/users")
    .success(function(response) 
	{
		$scope.users = response;
		$http.get("http://jsonplaceholder.typicode.com/albums")
		.success(function(data) 
		{
			$scope.albums = data;


                //$scope.selectedUser = $scope.albums.id;
            

                
            
        })
		});
	
	
	
	
	

  $scope.editorEnabled = false;
  
  $scope.click = function(id) {
    $scope.editorEnabled = true;
	for(i in $scope.users) {
            if($scope.users[i].id == id) {
            $scope.newName = $scope.users[i].name;
			$scope.add = $scope.users[i].address.street;
            }
        }
	/*for(i in $scope.albums) {
            if($scope.albums[i].id == id) {
            $scope.all = $scope.albums[i].title;
            }
        }*/

        $scope.allAlbums= [];
        for(i in $scope.albums) {
        $scope.allAlbums.push($scope.albums[i].title);

}
  }; 
});