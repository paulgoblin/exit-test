'use strict';

var app = angular.module('testApp');

app.controller('homeCtrl', function($scope, $state, LoginSrvc, UserSrvc, BeerSrvc) {
  let hc = this;
  hc.me = UserSrvc.me;
  BeerSrvc.requestNewBeers()
    .success( resp => {
      console.log("homeCtrl has new beers", resp);
    })
})
