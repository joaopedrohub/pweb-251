var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/data", (req, res) => {
  res.send("Você está na página data")
})

router.get("/about", (req, res) => {
  res.send("Você está na página about")
})

module.exports = router;
