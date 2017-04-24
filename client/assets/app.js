var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: "/partials/login.html",
    controller: "userController"
  })
  .when('/dashboard',{
    templateUrl: "/partials/dashboard.html",
    controller: "dashboardController"
  })
  .when('/create',{
    templateUrl: "/partials/create.html",
    controller: "pollController"
  })
  .when('/polls/:id',{
    templateUrl:"/partials/show.html",
    controller: "pollController"
  })
  .otherwise({redirectTo:'/'})
});
