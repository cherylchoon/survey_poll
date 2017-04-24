app.controller('userController', ['$scope','$location','userFactory', '$cookies', function($scope, $location, userFactory, $cookies){
  $scope.create = function(){
    userFactory.create($scope.user, function(data){
      if(data.err){
        $scope.errors = data.err.errors;
      } else{
        $cookies.put("id", data.user._id);
        $cookies.put("name", data.user.name);
        $location.url('/dashboard')
      }
    })
  }
}])
