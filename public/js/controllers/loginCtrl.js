'use strict';

var app = angular.module('testApp');

app.controller('loginCtrl', function($scope, $state, LoginSrvc) {
  let lc = this;

  lc.closeLoginModal = () => {
    lc.loginInfo = null;
    lc.registerInfo = null;
    $state.go('home')
  }

  lc.submitLogin = () => {
    LoginSrvc.login(lc.loginInfo)
      .success( resp => {
        console.log("you logged in!", resp);
        $state.go('home')
      })
  }

  lc.submitRegister = () => {
    LoginSrvc.register(lc.registerInfo)
      .success( resp => {
        console.log("you registered", resp);
        $state.go('home')
      })
  }

});
