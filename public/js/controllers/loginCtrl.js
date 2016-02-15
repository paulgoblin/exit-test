'use strict';

var app = angular.module('testApp');

app.controller('loginCtrl', function($scope, $state, LoginSrvc, UserSrvc) {
  let lc = this;

  lc.closeLoginModal = () => {
    lc.loginInfo = null;
    lc.registerInfo = null;
    $state.go('home')
  }

  lc.submitLogin = () => {
    LoginSrvc.login(lc.loginInfo)
      .success( resp => {
        UserSrvc.updateUser(resp)
        $state.go('home')
      })
  }

  lc.submitRegister = () => {
    let pwmatch = lc.registerInfo.password === lc.registerInfo.password2;
    if (!pwmatch) return alert('passwords gotta match, my fellow beer lover')
    LoginSrvc.register(lc.registerInfo)
      .success( resp => {
        UserSrvc.updateUser(resp)
        $state.go('home')
      })
  }

});
