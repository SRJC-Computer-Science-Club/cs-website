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

router.get('/categories/:categoryID/:tutorialID', function(req, res, next) {
  var navbar = {
    active: 'resources',
    links: []
  };

  var category = helper.findIdInCollection(req.params.categoryID, tempDB.categories);

  var tutorial = helper.findIdInCollection(req.params.tutorialID, category.tutorials);

  // tutorial._category = category;

  res.render('lessons', { title: 'CS Club', tutorial: tutorial, navbar: navbar});
});

module.exports = router;
