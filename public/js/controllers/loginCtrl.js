'use strict';

var app = angular.module('testApp');

app.controller('loginCtrl', function($scope) {
  console.log("login ctrl");
  $scope.test = 'poo'
});
