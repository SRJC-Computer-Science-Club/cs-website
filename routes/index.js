var express = require('express');
var tempDB = require('./TEMP_schema');
var router = express.Router();
var helper = require('./helper_methods');
var nodemailer = require('nodemailer');

router.get('*', function(req, res, next) {

  next();
});

/* GET home page. */
router.get('', function(req, res, next) {
  var navbar = {
    active: 'home',
    links: [
    { name: 'News',  url: '#top-news'  },
    { name: 'Join the Club',  url: '#join'  },
    { name: 'Top Projects',  url: '#project-spotlight'  },
    { name: 'Recent Events',  url: '#'  }
  ]};

  var results = [
    {id: 1, first_name: 'Josh', last_name: 'Murphy', election: 'President'},
    {id: 12, first_name: 'Kyle', last_name: ' O\'Brien', election: 'Vice-President'},
    {id: 20, first_name: 'Adam', last_name: 'Ahrens', election: 'Treasurer'},
    {id: 2, first_name: 'Erick', last_name: 'Sanchez', election: 'Secretary'}
  ];
  var projects = tempDB.projects;

  for ( var project of projects) {
    project.members= helper.findProjectMembers(project);
    project.areaRequests= helper.findProjectAreaRequests(project);
    for ( var request of project.areaRequests) {
      request.project_interest_color = helper.replaceColorIntensity({interest: request.project_interest});
    }
    project.events = helper.findProjectEvents( project);
  }

  res.render('index', { title: 'CS Club',  projects: projects, navbar: navbar, officers: results, helper: helper});
});


/* GET /join. */
router.get('/join', function(req, res, next) {
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
    project.members= helper.findProjectMembers(project);
  }

  res.render('submit', { title: 'CS Club', results: recipient, club_officers: helper.findClubOfficers(), popular_projects: projects, upcoming_events: helper.findAllEvents().upcoming_events, navbar: navbar, helper: helper});
});

module.exports = router;
