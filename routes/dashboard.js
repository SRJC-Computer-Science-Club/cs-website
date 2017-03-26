var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();
var helper = require('./helper_methods');

router.get('/', function(req, res, next) {
  var navbar = {
    active: 'dashboard',
    links: []
  };

	var projects = tempDB.projects;

	for ( var project of projects) {
		project.members = helper.findProjectMembers( project)
	}

	var login = null;

	login = {
		id: 1,
		token: "123456789",
		first_name: "Erick",
		last_name: "Sanchez",
		role: 0
	}

	login.name = login.first_name + ' ' + login.last_name;

	res.render('dashboard', {dashboard: true, title: 'CS Dashboard', token: login, navbar: navbar, my_projects: projects, my_events: helper.findAllEvents().upcoming_events, helper: helper});
})

module.exports = router;
