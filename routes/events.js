var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();
var helper = require('./helper_methods');

router.get('*', function(req, res, next) {

  next();
});



/* GET Events Page. */
router.get('/events', function(req, res, next) {
  var navbar = {
    active: 'events',
    links: []
  };

  res.render('events', { title: 'CS Club - Events', list_of_events: helper.findAllEvents(), navbar: navbar });
});



/* GET Project Event Page. */
router.get('/events/:eventID', function(req, res, next) {
  var navbar = {
    active: 'events',
    links: []
  };

  var event = helper.findProjectEventForID(tempDB.events, req.params.eventID);

  res.render('event', { title: 'CS Club - Events', event: event, navbar: navbar });
});



/* GET Project Event Page. */
router.get('/project-events/:eventID', function(req, res, next) {
  var navbar = {
    active: 'events',
    links: []
  };

  var event = helper.findProjectEventForID(tempDB.project_events, req.params.eventID);
  event.project = helper.findProjectForID(tempDB.projects, event.project_id);

  res.render('event', { title: 'CS Club - Events', event: event, navbar: navbar });
});

module.exports = router;
