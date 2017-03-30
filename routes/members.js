var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();
var helper = require('./helper_methods');

router.get('*', function(req, res, next) {

  next();
});



/* GET members page. */
router.get('/', function(req, res, next) {
  var navbar = {
    active: 'members',
    links: [
    { name: 'Members of the Board',  url: '#'  },
    { name: 'Programmers and Developers',  url: '#'  }
  ]};

  var members = tempDB.members;

  for ( var member of members)
  {
    member.numberOfProjects = member.findProjectsForMember().length;
  }

  res.render('members', { title: 'CS Club - Members (' + members.length + ')', members: members, officers: tempDB.club_officers, navbar: navbar, helper: helper});
});

/* GET member page. */
router.get('/:memberID', function(req, res, next) {
  var member = helper.findIdInCollection(req.params.memberID, tempDB.members);

  member.projects = member.findProjectsForMember();

  var navbar = {
    active: 'members',
    links: []
  };

  res.render('member', { title: 'CS Club' , member: member, navbar: navbar, helper: helper});
});

module.exports = router;
