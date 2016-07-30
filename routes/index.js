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

    var project = tempDB.projects[req.params.projectID];
    var members = findProjectMembers( project );

    project.members = members
    console.log(project);

  res.render('project', { title: 'CS Club' , project: project , services: tempDB.services});
});


/* GET Projects page. */
router.get('/projects/', function(req, res, next) {
  res.render('projects', { title: 'CS Club | Projects' , projects: tempDB.projects });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS Club',  projects: tempDB.projects });
});



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


module.exports = router;
