'use strict';

var app = angular.module('testApp');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      controllerAs: 'hc',
      templateUrl: '/html/home.html',
    })
    .state('login', {
      url: '/',
      controller: 'loginCtrl',
      controllerAs: 'lc',
      templateUrl: '/html/login.html',
    })

  $urlRouterProvider.otherwise('/');
});
