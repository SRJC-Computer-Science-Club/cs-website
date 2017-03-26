var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();
var helper = require('./helper_methods');

router.get('/', function(req, res, next) {
  var navbar = {
    active: '',
    links: []
  };

	res.render('dashboard', {dashboard: true, title: 'CS Dashboard', navbar: navbar});
})

module.exports = router;
