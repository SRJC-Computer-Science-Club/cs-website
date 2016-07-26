var express = require('express');
var router = express.Router();

/* GET Projects page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'CS Club' });
// });

router.get('/:projectID', function(req, res, next) {
  res.render('project', { title: 'CS Club' });
});


/* GET Projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'CS Club | Projects' });
});

module.exports = router;
