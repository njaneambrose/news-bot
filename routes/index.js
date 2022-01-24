var express = require('express');
var router = express.Router();
var bot = require('./b');


/* GET home page. */
router.get('/', function(req, res) {
  res.send('Welcome to the world of Bots!!!');
  bot.crawl();
});

module.exports = router;
