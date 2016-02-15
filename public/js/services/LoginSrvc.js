'use strict';

var app = angular.module('testApp');

app.service('LoginSrvc', function($http, CONST) {

  this.login = (loginInfo) => {
    return $http.post(`${CONST.API_URL}/users/login`, loginInfo)
     .success( resp => {
       updateToken(resp);
     })
     .error( err => {
       console.log("error logging in", err);
     })
  }

  this.register = (registerInfo) => {
    return $http.post(`${CONST.API_URL}/users/register`, registerInfo)
     .success( resp => {
       updateToken(resp);
     })
     .error( err => {
       console.log("error logging in", err);
     })
  }

  let updateToken = () => {
    // *poof* token updated!
  }


})
