var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json("Welcome to Shawna's totes kew app! Also, get out of here, and go to our real app at http://resistoralliance.herokuapp.com/");
});

module.exports = router;
