'use strict';

var app = angular.module('testApp');

app.controller('ratedCtrl', function($scope, UserSrvc) {
  let rc = this;
  UserSrvc.requestMe(UserSrvc.me._id)
  .success( resp => {
    console.log("rated beers", resp);
    rc.ratedBeers = resp.ratedBeers;
  })
})
