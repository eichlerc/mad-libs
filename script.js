var app = angular.module('myApp',['ngRoute']);

app.controller('myController', function($scope){
  $scope.words = [
    {word:'yourName', placeholder:'first name'},
    {word:'animal', placeholder:'animal'},
    {word:'foodDish', placeholder:'fooddish'},
    {word:'verb', placeholder:'verb'},
    {word:'color', placeholder:'color'},
    {word:'object', placeholder:'object'},
    {word:'place', placeholder:'place'}
  ]

})


app.config(function($routeProvider, $locationProvider){

  $routeProvider
    .when('/userInput', {
      controller: 'inputCtrl',
      templateUrl: 'views/searchpage.html'
    })
  .when('/viewsubreddit', {
    controller: 'viewCtrl',
    templateUrl: 'views/displaypage.html'
  });

  $locationProvider.hashPrefix('');

})
