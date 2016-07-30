var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();


router.get('*', function(req, res, next) {
  console.log(req.params);
  next();
});

// GET project page
router.get('/projects/:projectID', function(req, res, next) {
    console.log(req.params);
  res.render('project', { title: 'CS Club' , project: tempDB.projects[req.params.projectID] , services: tempDB.services});
});


/* GET Projects page. */
router.get('/projects/', function(req, res, next) {
  res.render('projects', { title: 'CS Club | Projects' , projects: tempDB.projects });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS Club',  projects: tempDB.projects });
});



module.exports = router;
