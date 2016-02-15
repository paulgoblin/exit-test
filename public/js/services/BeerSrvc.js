'use strict';

var app = angular.module('testApp');

app.service('BeerSrvc', function($http, CONST) {

  this.requestRandomBeer = () => {
    return $http.get(`${CONST.API_URL}/beers/randomBeer`)
     .success( resp => {
       console.log("got new beers");
     })
     .error( err => {
       console.log("error getting new beers", err);
     })
  }

})
