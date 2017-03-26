var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();
var helper = require('./helper_methods');
var nodemailer = require('nodemailer');

router.get('*', function(req, res, next) {

  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var navbar = {
    active: 'home',
    links: [
    { name: 'News',  url: '#top-news'  },
    { name: 'Join the Club',  url: '#join'  },
    { name: 'Top Projects',  url: '#project-spotlight'  },
    { name: 'Recent Events',  url: '#'  }
  ]};

  var results = [
    {id: 2, first_name: 'Erick', last_name: 'Sanchez', election: 'President'},
    {id: 1, first_name: 'Josh', last_name: 'Murphy', election: 'Vice-President'},
    {id: 4, first_name: 'Steven', last_name: 'Guido', election: 'Treasurer'},
    {id: 12, first_name: 'Kyle', last_name: ' O\'Brien', election: 'Secretary'},
    {id: 4, first_name: 'Steven', last_name: 'Guido', election: 'ICC Member'},
    {id: 14, first_name: 'Austin', last_name: 'Meyer', election: 'ICC Member'},
    {id: 16, first_name: 'Noah', last_name: '', election: 'ICC Member'}
  ];
  var projects = tempDB.projects;

  for ( var project of projects) {
    project.members= findProjectMembers(project);
    project.areaRequests= findProjectAreaRequests(project);
    for ( var request of project.areaRequests) {
      request.project_interest_color = replaceColorIntensity({interest: request.project_interest});
    }
    project.events = findProjectEvents( project);
  }

  res.render('index', { title: 'CS Club',  projects: projects, navbar: navbar, canidates: results, helper: helper});
});


/* GET /join. */
router.get('/join/', function(req, res, next) {
  var navbar = {
    active: 'home',
    links: []};

  res.render('join', { title: 'CS Club', navbar: navbar });
});

/* GET Submit. */
router.get('/join/submit', function(req, res, next) {

  var navbar = {
    active: 'home',
    links: []
  };

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport(
    {
      service: 'Gmail',
      auth:
      {
        user: 'srjc.computer.science.club@gmail.com',
        pass: '855990033'
      }
    });

  var recipient =
  {
    name: req.query.name == '' ? 'No Name' : req.query.name,
    contact: req.query.contact,
    message: req.query.message
  }

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: '"BOT" <srjc.computer.science.club@gmail.com>', // sender address
      to: 'srjc.computer.science.club@gmail.com', // list of receivers
      subject: 'Slack invite from ' + recipient.name, // Subject line
      text: 'Hi, Mr. President, my name is ' + recipient.name + '. Please use >' + recipient.contact + '< to contact me. ' + recipient.message // plaintext body
  };

  //send mail with defined transport object
  if (recipient.name != 'No Name' | recipient.contact != '' | recipient.message != '')
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
  else
    console.log('Message abort');

  var projects = tempDB.projects.slice(0,4);

  for ( var project of projects) {
    project.members= findProjectMembers(project);
  }

  res.render('submit', { title: 'CS Club', results: recipient, club_officers: findClubOfficers(), popular_projects: projects, upcoming_events: findAllEvents().upcoming_events, navbar: navbar, helper: helper});
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

function findClubOfficers()
{
  var members = [];
  for (var officer of tempDB.club_officers) {
    for (var member of tempDB.members) {
      if (officer.member_id == member.id) {
        member.role = officer.position_title;
        members.push(member);
      }
    }
  }

  return members;
}

module.exports = router;
