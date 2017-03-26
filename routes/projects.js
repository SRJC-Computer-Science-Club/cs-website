var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();
var helper = require('./helper_methods');

router.get('*', function(req, res, next) {

  next();
});


/* GET Projects page. */
router.get('/', function(req, res, next) {
  var projects = tempDB.projects;

  var navbar = {
    active: 'projects',
    links: []
  };

	var topProjects = [];
	var secondaryProjects = [];
	var archviedProjects = [];

  for ( var project of projects) {
    project.members= findProjectMembers(project);
    if (navbar.links.length < 4)
      navbar.links.push({name: project.title, url: '/projects/' +  project.id});
		if (project.status == "Archived" || project.satus == "Completed" || project.status == "Resigned" || project.status == "")
			archviedProjects.push(project);
		else if (project.status == "On-Hold" || project.status == "Not on Track" || project.status == "Positions Needed")
			secondaryProjects.push(project);
		else {
			if (topProjects.length > 3)
				secondaryProjects.push(project);
			else
				topProjects.push(project);
		}
  }

	console.log({top: topProjects, secondary: secondaryProjects, archvied: archviedProjects});

  res.render('projects', { title: 'CS Club | Projects' , list_of_projects: {top: topProjects, secondary: secondaryProjects, archived: archviedProjects}, helper: helper, navbar: navbar});
});

// GET project page
router.get('/:projectID', function(req, res, next) {
  var projects = tempDB.projects;

  var navbar = {
    active: 'projects',
    links: []
  };

  var project = findProjectForID( projects, req.params.projectID);

  for ( var p of projects) {
    if (navbar.links.length < 4)
      navbar.links.push({name: p.title, url: '/projects/' +  p.id, active: p.title === project.title});
  }
  navbar.links.push({name: "List of Projects", url: '/projects'});

  project.members = findProjectMembers( project );
  project.team = {project_managers: [], members: []};
  for (var member of project.members) {
    if (member.role.includes("Project Founder") | member.role.includes("Project Manager") | member.role.includes("Sub-Project Manager"))
      project.team.project_managers.push(member);
    else
      project.team.members.push(member);
  }

  project.team.project_managers.sort(function(a, b) {
    if (a.role.includes("Project Founder") & ( b.role.includes("Project Manager") | b.role.includes("Sub-Project Manager"))) {
      return -1; //a is greater than b
    }
    if (a.role.includes("Project Manager") & ( b.role.includes("Sub-Project Manager"))) {
      return -1; //a is greater than b
    }
    if (a.role.includes("Project Manager") & ( b.role.includes("Project Founder"))) {
      return 1; //a is less than b
    }
    if (a.role.includes("Sub-Project Manager") & ( b.role.includes("Project Founder") | b.role.includes("Project Manager"))) {
      return 1; //a is less than b
    }
    // a must be equal to b
    return 0;
  });

  project.team.members.sort(function(a, b) {
    if (a.role.includes("Lead Developer") & !( b.role.includes("Lead Developer"))) {
      return -1;
    }
    if ((a.role.includes("Developer") & !a.role.includes("Lead Developer")) & !( b.role.includes("Developer"))) {
      return -1;
    }
    if (!a.role.includes("Lead Developer") & ( b.role.includes("Lead Developer"))) {
      return 1;
    }
    if (!(a.role.includes("Developer") & !a.role.includes("Lead Developer")) & ( b.role.includes("Developer"))) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  project.areaRequests= findProjectAreaRequests(project);
  for ( var request of project.areaRequests) {
    request.author = findMemberForID( project.members, request.author_id);
    var project_interest = {interest: request.project_interest, title: 'undefined', value: '0'};
    request.project_interest_color = replaceColorIntensity(project_interest);
    request.project_interest_title = replaceColorTitle(project_interest);
    for ( var asset of request.assets) {
      asset.experience_color = replaceColorIntensity({value: asset.experience});
    }
  }
  project.events = findProjectEvents( project);

  res.render('project', { title: 'CS Club' , project: project, services: tempDB.services, navbar: navbar, helper: helper});
});

/* GET Project Photo Gallery. */
router.get('/:projectID/photo-gallery', function(req, res, next) {
  var navbar = {
    active: 'projects',
    links:
    [
      {name: 'Back to Project', url: '/projects/'+req.params.projectID, active: true}
      //{name: 'Download Gallery', url: '#', active: false}
    ]
  };

  var project = findProjectForID( tempDB.projects, req.params.projectID);

  res.render('project_photo-gallery', { title: 'CS Club', project: project, navbar: navbar });
});



function findProjectForID( projects, id )
{
  var found;
  for( var project of projects)
  {
    if (project.id == id)
      found = project;
  }

  return found;

}



function findMemberForID( members, id )
{
  var found;
  for( var member of members)
  {
    if (member.id == id)
      found = member;
  }

  return found;

}



function findProjectMembers( project )
{
  var members = [];

  for( var member_project of tempDB.members_projects )
  {
    if ( member_project.project_id == project.id )
    {
      var potentialMember = findMemberForID(tempDB.members,member_project.member_id);

      if (potentialMember !== undefined ) {
        potentialMember.role = member_project.role;
        members.push( potentialMember);
      }
    }
  }

  return members;
}



function findProjectAreaRequests( project )
{
  var requests = [];

  for ( var area_request of tempDB.project_area_requests )
  {
    if (project.id == area_request.project_id)
    {
      requests.push(area_request);
    }
  }

  return requests;
}



function findProjectEvents( project )
{
  var events = [];

  for ( var event of tempDB.project_events )
  {
    if (project.id == event.project_id)
    {
      events.push(event);
    }
  }

  return events;
}



function findProjectEventForID( events, id )
{
  var found;
  for ( var event of events)
  {
    if (event.id == id)
      found = event;
  }

  return found;

}



function findProjectsForMember( member )
{
  var projects = [];

  for ( var member_project of tempDB.members_projects )
  {
      if ( member_project.member_id == member.id )
      {
        var potentialProject = findProjectForID(tempDB.projects,member_project.project_id);

        if (potentialProject !== undefined ) {
          potentialProject.role = member_project.role;
          projects.push( potentialProject);
        }
      }

  }

  return projects;
}

function replaceColorIntensity(project_interest)
{
  if (project_interest.interest != undefined) {
    for ( var i = 0; i < project_interest.interest.length; i += 1) {
      if (project_interest.interest[i] == ':') {
        project_interest.value = parseInt(project_interest.interest[++i]);
        project_interest.title = project_interest.interest.substr(0, --i);
      }
    }
  }
  switch (project_interest.value) {
    case 1:
      return '#BFBFBF'; break;
    case 2:
      return '#7ED321'; break;
    case 3:
      return '#4A90E2'; break;
    case 4:
      return '#F5A623'; break;
    case 5:
      return '#D0021B'; break;
    default:
      return '#BFBFBF'; break;
  }
}

function replaceColorTitle(project_interest)
{
  if (project_interest.title == '') {
    switch (project_interest.value) {
      case 1:
        project_interest.title = "Not Needed Now"; break;
      case 2:
        project_interest.title = "Planned Development"; break;
      case 3:
        project_interest.title = "Looking for Help"; break;
      case 4:
        project_interest.title = "In Need"; break;
      case 5:
        project_interest.title = "Strickly Needed"; break;
      default:
        project_interest.title = "undefined";
        break;
    }
  }
  return project_interest.title;
}

module.exports = router;
