var express = require('express');
var tempDB = require('./TEMP_schema');
var helper = require('./helper_methods');
var router = express.Router();

var login = null;

login = {
	id: 1,
	token: "123456789",
	member: tempDB.members[0],
	first_name: "Erick",
	last_name: "Sanchez",
	role: 0
}

login.name = login.first_name + ' ' + login.last_name;

router.get('/', function(req, res, next) {
  var navbar = {
    active: 'dashboard',
    links: []
  };

	var projects = tempDB.projects;

	var myProjects = [];

	for ( var project of projects ) {
		if (project.isProjectAdmin(login.member))
			myProjects.push(project);
	}

	for ( var project of myProjects) {
		project.members = project.findProjectMembers();
	}

	res.render('dashboard', {dashboard: true, title: 'CS Dashboard', token: login, navbar: navbar, my_projects: myProjects, my_events: helper.findAllEvents().upcoming_events, helper: helper});
});



router.get('/projects', function(req, res, next) {
  var navbar = {
    active: 'projects',
    links: []
  };

	var projects = tempDB.projects;

	for ( var project of projects) {
		project.members = project.findProjectMembers();
		project.admin = project.isProjectAdmin(login.member);
	}

	projects.sort(function(a,b) {
		if (a.admin == true && b.admin == false)
			return -1;
		if (b.admin == true && a.admin == false )
			return 1;
			
		return 0;
	});  


	res.render('dashboard-projects', {dashboard: true, title: 'CS Dashboard - Projects', projects: projects, token: login, navbar: navbar, helper: helper});

});

module.exports = router;
