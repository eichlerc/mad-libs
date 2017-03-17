var app = angular.module('madLibsApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $routeProvider
    .when('/userInput', {
      controller: 'formCtrl',
      templateUrl: 'views/userInput.html'
    })
  .when('/showUserStory', {
    controller: 'viewCtrl',
    templateUrl: 'views/showUserStory.html'
  });

  $locationProvider.hashPrefix('');

})
