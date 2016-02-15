'use strict';

var app = angular.module('testApp');

app.controller('homeCtrl', function($scope, $state, LoginSrvc, UserSrvc, BeerSrvc) {
  let hc = this;
  hc.me = UserSrvc.me;
  let requestRandomBeer = () => BeerSrvc.requestRandomBeer()
    .success( resp => {
      hc.randomBeer = resp.data;
      BeerSrvc.getThumbnail(resp.data.name)
        .success( resp => {
          hc.randomBeer.imgUrl = resp.thumbnailUrl;
          console.log("thumbnailUrl");
        })
        .error( err => {
          hc.randomBeer.imgUrl = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaTv4NjU_LUADczNnQqPEGEd3SccmhH-oKjE53sNCNiEsL0ojugWy_Eg';
        })
    })

  hc.rateBeer = (beer, rating) => {
    console.log("rating", rating);
    let body = {};
    body.rating = rating;
    body.userId = hc.me._id;
    body.beer = beer;
    console.log("sending rating", body);
    UserSrvc.rateBeer(beer.id, body)
      .success( resp => {
        console.log("rated beer", resp);
        requestRandomBeer();
      })
  }

  requestRandomBeer();

})
