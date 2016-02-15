'use strict';

var app = angular.module('testApp');

app.service('UserSrvc', function($http, CONST) {

  this.updateUser = (user) => {
    this.me = user;
  }

  this.requestMe = (meId) => {
    return $http.get(`${CONST.API_URL}/users/${meId}`)
     .success( resp => {
     })
     .error( err => {
       console.log("error ratign beer", err);
     })
  }

  this.rateBeer = (beerId, body) => {
    return $http.post(`${CONST.API_URL}/users/rateBeer/${beerId}`, body)
     .success( resp => {
     })
     .error( err => {
       console.log("error ratign beer", err);
     })
  }


})
