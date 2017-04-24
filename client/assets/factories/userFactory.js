app.factory('userFactory', ['$http', function($http){
  factory = {};
  factory.create = function(user, callback){
    $http.post('/users', user).then(function(returned_data){
      callback(returned_data.data);
    })
  }
  return factory;
}])
