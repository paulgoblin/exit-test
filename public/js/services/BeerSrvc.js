'use strict';

var app = angular.module('testApp');

app.service('BeerSrvc', function($http, CONST) {

  this.requestNewBeers = () => {
    return $http.get(`${CONST.API_URL}/beers/newBeers`)
     .success( resp => {
       console.log("got new beers");
     })
     .error( err => {
       console.log("error getting new beers", err);
     })
  }

})
