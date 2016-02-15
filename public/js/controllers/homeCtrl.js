'use strict';

var app = angular.module('testApp');

app.controller('homeCtrl', function($scope, $state, LoginSrvc, UserSrvc) {
  let hc = this;
  hc.me = UserSrvc.me

})
