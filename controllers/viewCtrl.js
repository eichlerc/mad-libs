//CONTROLLER

var app = angular.module("madLibsApp");


//this controller handles the user input view
app.controller('viewCtrl', function($scope, $location, madLibsFactory) {

  $scope.inputWords = madLibsFactory.receive(); // go to factory and come back

});
