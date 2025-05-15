var express = require('express');
var router = express.Router();

var videos = [

  {
    title: "oi"
  }

]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { videos: videos});
});

module.exports = router;
