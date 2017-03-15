//CONTROLLER

var app = angular.module('myApp');

//this controller handles the user input view
app.controller('myController', function($scope, myFactory) {

//this function takes info from our input and sents it to the factory's function called giveItToUs
  $scope.sendName = function(subName) { // this relates to subreddit in the redditfactory.js

  console.log(subName);

  myFactory.giveItToUs(subName);
}

});
