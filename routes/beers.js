'use strict';

var express = require('express');
var User = require('../models/user');
var beerApi = require('../APIs/brewerydb')

var router = express.Router();

router.get('/randomBeer', function(req, res) {
  beerApi.getRandom( (err, body) => {
    if (err) console.log("error registering", err);
    res.status(err ? 400 : 200).send(err || body);
  })
});

module.exports = router;
