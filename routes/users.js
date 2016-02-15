'use strict';

var express = require('express');
var User = require('../models/user');

var router = express.Router();

router.get('/:userId', function(req, res) {
  User.findById(req.params.userId, (err, user) => {
    if (err || !user) console.log("error logging in", err);
    res.status( (err || !user) ? 400 : 200).send(err || user);
  })
});

router.post('/login', (req, res) => {
  User.authenticate(req.body, (err, token) => {
    if (err) console.log("error logging in", err);
    res.status(err ? 400 : 200).send(err || token);
  });
});

router.post('/register', (req, res) => {
  User.register(req.body, (err, token) => {
    if (err) console.log("error registering", err);
    res.status(err ? 400 : 200).send(err || token);
  });
});

router.post('/rateBeer/:beerId', (req, res) => {
  User.rateBeer( req, (err, user) => {
    if (err) console.log("error rating", err);
    res.status(err ? 400 : 200).send(err || 'success!');
  });
});

module.exports = router;
