var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/app-1', function(req, res, next) {
  res.render('app-one', { title: 'Express' });
});
router.get('/app-2', function(req, res, next) {
  res.render('app-two', { title: 'Express' });
});

router.post('/api/test/data', function(req, res, next) {
  var data = [{
    first: "Bruce",
    last: "Wayne"
  }, {
    first: "Peter",
    last: "Parker"
  }]
  res.send(data);
});

module.exports = router;
