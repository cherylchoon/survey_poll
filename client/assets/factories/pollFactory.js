app.factory('pollFactory', ['$http', function($http){
  factory = {};

  factory.create = function(poll, callback){
    $http.post('/polls', poll).then(function(returned_data){
      callback(returned_data.data);
    })
  }

  factory.index = function(callback){
    $http.get('/polls').then(function(returned_data){
      callback(returned_data.data);
    })
  }

  factory.show = function(id, callback){
    $http.get('/polls/' + id).then(function(returned_data){
      callback(returned_data.data);
    })
  }

  factory.delete = function(id, callback){
    $http.delete('/polls/' + id).then(function(returned_data){
      callback(returned_data.data);
    })
  }

  factory.vote = function(vote, callback){
    $http.post('/votes', vote).then(function(returned_data){
      callback(returned_data.data);
    })
  }

  return factory;
}])
