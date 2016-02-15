'use strict';

var app = angular.module('testApp');

app.service('SuperService', function($http) {
  console.log("super service here");
  this.test = (stuff) => {
    console.log(stuff);
  }
})
