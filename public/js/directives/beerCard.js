'use strict';
angular.module('testApp')

.directive('beerCard', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'beerCardCtrl',
    controllerAs: 'bc',
    scope: true,
    bindToController: {
      beer: "="
    },
    templateUrl:'/html/beerCard.html',
  }
})

.controller('beerCardCtrl', function() {
  console.log("hello this is beer card");
  let bc = this;
  bc.test = "poo";
})
