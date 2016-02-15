'use strict';

var express = require('express');
var User = require('../models/user');

let BEER_API = 'http://api.brewerydb.com/v2/';
let BEER_KEY = process.env.BEER_KEY;

var router = express.Router();

router.get('/newBeers', function(req, res) {
  res.send('hello, this is beer');
});

module.exports = router;
