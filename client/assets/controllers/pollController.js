app.controller('pollController',['$routeParams','$scope','$location', '$cookies', 'userFactory','pollFactory',function($routeParams, $scope, $location, $cookies, userFactory, pollFactory){

    $scope.user = $cookies.get("name");
    $scope.user_id = $cookies.get("id");

    $scope.create = function(){
      if($scope.poll){
        $scope.poll.user_id = $scope.user_id
      }
      pollFactory.create($scope.poll, function(data){
        if(data.err){
          $scope.errors = data.err.errors;
        } else{
          $location.url('/dashboard');
        }
    })
    }

    $scope.show = function(){
        pollFactory.show($routeParams.id, function(data){
            if(data.err){
                console.log(data.err)
            } else{
                $scope.poll = data.poll;
            }
        })
    }
    $scope.show();

    $scope.vote = function(option){
      $scope.vote_obj = {};
      $scope.vote_obj.option = option;
      $scope.vote_obj.poll_id = $routeParams.id;
      pollFactory.vote($scope.vote_obj, function(data){
        if (data.err){
          console.log(data.err)
        } else{
          $scope.show();
        }
      })
    }
}])
