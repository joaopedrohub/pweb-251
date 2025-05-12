var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Você está na página users.');
});

router.get("/signup", (req, res) => {
    res.send("Você está na página de sign up.")
})

router.get("/:userid", (req, res) => {
    var userId = req.params.userid
    if (userId != "") {
        res.send("Olá, " +  userId)
    } else {
        res.redirect("/signup")
    }
})

module.exports = router;
