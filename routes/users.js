'use strict';

var express = require('express');
var User = require('../models/user');

var router = express.Router();

router.get('/', function(req, res) {
  res.send('hello, this is users');
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

module.exports = router;
