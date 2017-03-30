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

  var event = helper.findIdInCollection(req.params.eventID, tempDB.events);

  res.render('event', { title: 'CS Club - Events', event: event, navbar: navbar });
});


/* GET Project Event Page. */
router.get('/project-events/:eventID', function(req, res, next) {
  var navbar = {
    active: 'events',
    links: []
  };

  var event = helper.findIdInCollection(req.params.eventID, tempDB.project_events);
  event.project = helper.findIdInCollection(event.project_id, tempDB.projects);

  res.render('event', { title: 'CS Club - Events', event: event, navbar: navbar });
});

module.exports = router;
