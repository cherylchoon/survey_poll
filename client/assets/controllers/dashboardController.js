app.controller('dashboardController',['$scope', 'pollFactory','userFactory', '$cookies', '$location', function($scope, pollFactory, userFactory, $cookies, $location){
  $scope.user = $cookies.get("name");
  $scope.user_id = $cookies.get("id");

  $scope.logout = function(){
    $cookies.remove("id");
    $cookies.remove("name");
    $location.url('/')
  }

  $scope.index = function(){
    pollFactory.index(function(data){
      if (data.err){
        console.log(data.err)
      } else{
        $scope.polls = data.polls
      }
    })
  }
  $scope.index();

  $scope.delete = function(id){
    pollFactory.delete(id, function(data){
      if (data.err){
        console.log(data.err)
      } else{
        console.log(data.poll)
        $scope.index();
      }
    })
  }
}])
