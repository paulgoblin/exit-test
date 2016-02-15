'use strict';

var app = angular.module('testApp');

app.service('BeerSrvc', function($http, CONST) {

  this.randomBeer = null;

  this.requestRandomBeer = () => {
    return $http.get(`${CONST.API_URL}/beers/randomBeer`)
     .success( resp => {
       console.log("got new beers");
       this.randomBeer = resp.data;
     })
     .error( err => {
       console.log("error getting new beers", err);
     })
  }

})
