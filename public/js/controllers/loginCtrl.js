'use strict';

var app = angular.module('testApp');

app.controller('loginCtrl', function($scope, $state, SuperService) {
  let lc = this;

  lc.closeLoginModal = () => {
    lc.loginInfo = null;
    lc.registerInfo = null;
    $state.go('home')
  }

  lc.submitLogin = () => {
    SuperService.test(this.loginInfo);
  }

});
