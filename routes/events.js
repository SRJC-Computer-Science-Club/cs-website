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

  res.render('events', { title: 'CS Club - Events', list_of_events: findAllEvents(), navbar: navbar });
});



/* GET Project Event Page. */
router.get('/events/:eventID', function(req, res, next) {
  var navbar = {
    active: 'events',
    links: []
  };

  var event = findProjectEventForID(tempDB.events, req.params.eventID);

  res.render('event', { title: 'CS Club - Events', event: event, navbar: navbar });
});



/* GET Project Event Page. */
router.get('/project-events/:eventID', function(req, res, next) {
  var navbar = {
    active: 'events',
    links: []
  };

  var event = findProjectEventForID(tempDB.project_events, req.params.eventID);
  event.project = findProjectForID(tempDB.projects, event.project_id);

  res.render('event', { title: 'CS Club - Events', event: event, navbar: navbar });
});

function findAllEvents()
{
	var events = tempDB.project_events.concat(tempDB.events);
	var pastEvents = [];
	var upcommingEvents = [];
	for (var event of events) {
		console.log(Date.now() - new Date(event.date_range));
		if (Date.now() - new Date(event.date_range) > 0)
			pastEvents.push(event);
		else
			upcommingEvents.push(event);
	}

	upcommingEvents.sort(function(a,b) {
		if (a.date_range == "TBA") //Puts TBA as upcoming and on bottom
			return 1;
		else if (b.date_range == "TBA")
			return -1;
		return new Date(a.date_range) - new Date(b.date_range)
	});

	return {upcoming_events: upcommingEvents, past_events: pastEvents}

}



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
