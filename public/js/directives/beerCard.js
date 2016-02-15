'use strict';
angular.module('testApp')

.directive('beerCard', function(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    controller: 'beerCardCtrl',
    controllerAs: 'bc',
    scope: true,
    bindToController: {
      beer: "="
    },
    templateUrl:'/html/beerCard.html',
    link: function(scope, el, attrs, ctrl, transclude) {
      el.append(transclude());
    },
  }
})

.controller('beerCardCtrl', function() {
  let bc = this;
})
