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
    .state('rated', {
      url: '/',
      controller: 'ratedCtrl',
      controllerAs: 'rc',
      templateUrl: '/html/rated.html',
    })

  $urlRouterProvider.otherwise('/');
});
