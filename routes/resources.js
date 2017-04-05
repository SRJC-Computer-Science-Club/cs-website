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

router.get('/categories/', function(req, res, next) {
  var navbar = {
    active: 'resources',
    links: []
  };

  var categories = tempDB.categories;

  res.render('resources/categories', { title: 'CS Club', navbar: navbar, categories: categories});
});

router.get('/categories/:categoryID/', function(req, res, next) {
  var navbar = {
    active: 'resources',
    links: [
      {name: "View List of Categories", url: ".."}
    ]
  };

  var category = helper.findIdInCollection(req.params.categoryID, tempDB.categories);

  res.render('/tutorials', { title: 'CS Club', navbar: navbar, category: category});
});

router.get('/categories/:categoryID/:tutorialID/', function(req, res, next) {
  var navbar = {
    active: 'resources',
    links: [
      {name: "View List of Tutorials", url: ".."}
    ]
  };

  var category = helper.findIdInCollection(req.params.categoryID, tempDB.categories);

  var tutorial = helper.findIdInCollection(req.params.tutorialID, category.tutorials);

  res.render('/lessons/', { title: 'CS Club', tutorial: tutorial, navbar: navbar});
});

router.get('/categories/:categoryID/:tutorialID/:lessonID/', function(req, res, next) {
  var navbar = {
    active: 'resources',
    links: [
      {name: "View List of Lessons", url: ".."}
    ]
  };

  var category = helper.findIdInCollection(req.params.categoryID, tempDB.categories);
  var tutorial = helper.findIdInCollection(req.params.tutorialID, category.tutorials);
  var lesson = helper.findIdInCollection(req.params.lessonID, tutorial.lessons);

  res.render('lesson', { title: 'CS Club', lesson: lesson, navbar: navbar});
});

module.exports = router;
