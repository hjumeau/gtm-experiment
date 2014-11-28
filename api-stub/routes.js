var express = require('express');
var router = express.Router();

module.exports = router;

router.post('/subscribe', function(req, res) {
  res.send({status:200});
});

router.get('/unsubscribe', function(req, res) {
  res.send({status:200});
});
