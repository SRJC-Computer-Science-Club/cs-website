var express = require('express');
var router = express.Router();

/* GET Projects page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'CS Club' });
// });

/* GET Projects page. */
router.get('/', function(req, res, next) {
  res.render('project', { title: 'CS Club' });
});

module.exports = router;
