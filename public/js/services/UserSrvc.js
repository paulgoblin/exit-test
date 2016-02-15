'use strict';

var app = angular.module('testApp');

app.service('UserSrvc', function($http, CONST) {

  this.updateUser = (user) => {
    this.me = user;
  }


})
