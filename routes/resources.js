var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();
var helper = require('./helper_methods');

router.get('*', function(req, res, next) {
  next();
});


/* GET ABOUT PAGE. */
router.get('/', function(req, res, next) {
  var navbar = {
    active: 'resources',
    links: []
  };

  res.render('resources', { title: 'CS Club', navbar: navbar });
});

router.get('/categories', function(req, res, next) {
  var navbar = {
    active: 'resources',
    links: []
  };

  var categories = tempDB.categories;

  res.render('categories', { title: 'CS Club', navbar: navbar, categories: categories});
});

router.get('/categories/:categoryID', function(req, res, next) {
  var navbar = {
    active: 'resources',
    links: []
  };

  var category = helper.findIdInCollection(req.params.categoryID, tempDB.categories);

  res.render('tutorials', { title: 'CS Club', navbar: navbar, category: category});
});

router.get('/categories/tutorials/:tutorialID', function(req, res, next) {
  var navbar = {
    active: 'resources',
    links: []
  };

  // var category = helper.findIdInCollection(req.params.categoryID, tempDB.categories);

  res.render('tutorial', { title: 'CS Club', navbar: navbar});
});

module.exports = router;
