'use strict';

var app = angular.module('testApp');

app.service('UserSrvc', function($http, CONST) {
  console.log("hello, this is UserSrvc");


  this.updateUser = (user) => {
    console.log("updating", user);
  }


})
