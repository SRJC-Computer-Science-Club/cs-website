var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();
var helper = require('./helper_methods');

router.get('*', function(req, res, next) {
  //console.log(req.params);

  next();
});

// GET project page
router.get('/projects/:projectID', function(req, res, next) {
  console.log(req.params);

  var projects = tempDB.projects;

  var navbar = {
    active: 'projects',
    links: []
  };

  var project = findProjectForID( projects, req.params.projectID);

  for ( var p of projects) {
    navbar.links.push({name: p.title, url: '/projects/' +  p.id, active: p.title === project.title});
  }


  var members = findProjectMembers( project );

  project.members = members
  console.log(project);

  res.render('project', { title: 'CS Club' , project: project , services: tempDB.services, navbar: navbar});
});




/* GET Projects page. */
router.get('/projects/', function(req, res, next) {

  var projects = tempDB.projects;

  var navbar = {
    active: 'projects',
    links: []
  };

  for ( var project of projects) {
    project.members= findProjectMembers(project);
    navbar.links.push({name: project.title, url: '/projects/' +  project.id});
  }

console.log( navbar);
  res.render('projects', { title: 'CS Club | Projects' , projects: projects, helper: helper, navbar: navbar});
});




/* GET home page. */
router.get('/', function(req, res, next) {

  var navbar = {
    active: 'home',
    links: [
    { name: 'News',  url: '#'  },
    { name: 'Join the Club',  url: '#'  },
    { name: 'Top Projects',  url: '#'  },
    { name: 'Recent Events',  url: '#'  }
  ]};



  res.render('index', { title: 'CS Club',  projects: tempDB.projects, navbar: navbar });
});




/* GET members page. */
router.get('/members', function(req, res, next) {

  var navbar = {
    active: 'members',
    links: [
    { name: 'Members of the Board',  url: '#'  },
    { name: 'Programmers and Developers',  url: '#'  }
  ]};

  var members = tempDB.members;

  for ( var member of members)
  {
    member.numberOfProjects = findProjectsForMember( member).length;
  }

  res.render('members', { title: 'CS Club',  members: members, navbar: navbar, helper: helper});
});




/* GET member page. */
router.get('/members/:memberID', function(req, res, next) {
  console.log(req.params);

  var member = tempDB.members[req.params.memberID];

  member.projects = findProjectsForMember(member);

  var navbar = {
    active: 'members',
    links: []
  };

  res.render('member', { title: 'CS Club' , member: member, navbar: navbar, helper: helper});
});




/* GET NEW-PAGE TEMPLATE. */
router.get('/PLACEHOLDER', function(req, res, next) {

  var navbar = {
    active: 'PAGE',
    links: [
    { name: 'ITEM',  url: '#'  },
  ]};



  res.render('JADE FILE', { title: 'CS Club', navbar: navbar });
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



function findProjectMembers( project )
{
  var members = [];

  console.log( tempDB.members_projects);
  for( var member_project of tempDB.members_projects )
  {
    if ( member_project.project_id == project.id )
    {
      var potentialMember = tempDB.members[member_project.member_id];

      if (potentialMember !== undefined ) {
        tempDB.members[member_project.member_id].role = member_project.role;
        members.push( tempDB.members[member_project.member_id]);
      }
    }
  }

  return members;
}



function findProjectsForMember( member )
{
  var projects = [];

  for( var member_project of tempDB.members_projects )
  {
      if ( member_project.member_id == member.id )
      {
        var potentialProject = tempDB.projects[member_project.project_id];

        if (potentialProject !== undefined ) {
          tempDB.projects[member_project.project_id].role = member_project.role;
          projects.push( tempDB.projects[member_project.project_id]);
        }
      }

  }

  return projects;
}

module.exports = router;
