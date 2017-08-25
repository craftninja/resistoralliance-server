var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([
    {
      id:1,
      name: 'CraftNinja',
      patronus: 'red wolf',
    },
    {
      id:2,
      name: 'TheQuilticorn',
      patronus: 'snow leopard',
    },
    {
      id:3,
      name: 'FancyAm',
      patronus: 'mountain goat',
    },
  ]);
});

module.exports = router;
