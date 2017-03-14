var app = angular.module('myApp',['ngRoute']);


app.config(function($routeProvider, $locationProvider){

  $routeProvider
    .when('/sayhello',{
      controller: 'myController',
      templateUrl: '???.html'
    })
    .when('/saygoodbye', {
      controller: 'secondController',
      templateUrl: '???.html'

    });

    $locationProvider.hashPrefix('')

});



});
