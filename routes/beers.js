'use strict';

var express = require('express');
var User = require('../models/user');
var beerApi = require('../APIs/brewerydb')

var router = express.Router();

router.get('/newBeers', function(req, res) {
  res.send(beerApi.test());
});

module.exports = router;
