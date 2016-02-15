'use strict';

let request = require('request');

let BEER_API = 'http://api.brewerydb.com/v2/';
let BEER_KEY = process.env.BEER_KEY;

let brewerydb = {
  test: () => {
    return "brewerydb test"
  },

  getRandom: (cb) => {
    let reqUrl = `${BEER_API}beer/random?key=${BEER_KEY}`;
    console.log("reqUrl", reqUrl);
    // cb(null, reqUrl);
    request(reqUrl, function (err, res, body) {
      if (err || res.statusCode !== 200) return cb(err)
        return cb(null, body)
    })
  }

}

module.exports = brewerydb;
