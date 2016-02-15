'use strict';

var app = angular.module('testApp', ['ui.router'])


.constant('CONST', {
  API_URL: 'http://localhost:3000',
  THUMBNAIL_API: 'https://damp-reaches-8819.herokuapp.com/image/thumbnail/'
})
