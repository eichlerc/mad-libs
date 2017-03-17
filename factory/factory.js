var app = angular.module('madLibsApp');

app.factory("madLibsFactory", function() {

  var inputWords = {};

  return {
    send: send,
    receive: receive
  };

  function send (name, verb, adj, color) {
    inputWords.name = name;
    inputWords.verb = verb;
    inputWords.adj = adj;
    inputWords.color = color;

  }

  function receive() {
    return inputWords;
  }

});
