angular.module('userProfiles').controller('MainController', function($scope, userService){

    $scope.thisAppIsBroken = "This angular app is working";

  // userService.getUsers(function(response) {
  //   console.log(response.data);
  //   $scope.users = response.data;
  // });

  $scope.showData = function (){
    $scope.users = userService.getData();
  };

$scope.showData();
console.log($scope.users);

  $scope.toggleFavorite = function(i){
    console.log(i);
    userService.toggleFavorite(i);
  };

  // $scope.users = userService.getUsers();


//
//    dataService.getTodos(function(response) {
//     console.log(response.data);
//     $scope.todos = response.data;
// });
   //
  //  console.log(users);
});
