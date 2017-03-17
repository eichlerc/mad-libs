//CONTROLLER

var app = angular.module("madLibsApp");


//this controller handles the user input view
app.controller('formCtrl', function($scope, $location, madLibsFactory) {

//this function takes info from our input and sents it to the factory's function called giveItToUs
  $scope.send = function(name, verb, adj, color) { // this relates to send  in the factory.js
console.log(name, verb, adj, color);

madLibsFactory.send(name, verb, adj, color);

$location.path("/showUserStory");


}


});
