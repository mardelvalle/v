var express = require('express');
var router = express.Router();
console.log(router)
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("reaching!")
  res.send('Express RESTful API');
});

module.exports = router;
