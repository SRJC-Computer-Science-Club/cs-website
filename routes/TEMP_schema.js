//This will act as temporary database placeholder


function Project( id, title, description, description_short, status, links )
{
	this.id = id;
	this.title = title;
	this.description = description;
	this.description_short = description_short;
	this.status = status;
	this.links = links;
}



function Member( id, first_name, last_name, bio, bio_short, links, email, languages )
{
	this.id = id;
	this.first_name = first_name;
	this.last_name = last_name;
	this.bio = bio;
	this.bio_short = bio_short;
	this.links = links;
	this.email = email;
	this.languages = languages;
}

function MembersProjects( id, project_id, member_id, role )
{
  this.id = id;
	this.project_id = project_id;
	this.member_id = member_id;
	this.role = role;
}



var projects = [
	new Project(
		0,
		'Micromouse',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'An autonomous maze solving robot mouse',
		'In Progress',
		{
			checkvist: 'https://checkvist.com/checklists/542765',
			waffle: 'https://waffle.io/SRJC-Computer-Science-Club/micromouse',
			github: 'https://github.com/SRJC-Computer-Science-Club/micromouse'
		}
	),
	new Project(
		1,
		'CS Website',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'A new website to showoff what we do as a club',
		'In Progress',
		{
			checkvist: 'https://checkvist.com/checklists/563656',
			waffle: 'https://waffle.io/SRJC-Computer-Science-Club/cs-website',
			github: 'https://github.com/SRJC-Computer-Science-Club/cs-website'
		}
  ),
  new Project(
    2,
    '2D Platformer',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'A simple 2d platformer game',
    'In Progress',
    {
      checkvist: 'https://checkvist.com/checklists/560653',
      waffle: 'https://waffle.io/SRJC-Computer-Science-Club/2d-platformer',
      github: 'https://github.com/SRJC-Computer-Science-Club/2d-platformer'
    }
  ),
  new Project(
    3,
    'Function Fighters',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'An AI battle arena simulator',
    'In Progress',
    {
      github: 'https://github.com/joshuasrjc/function-fighters'
    }
  ),
  new Project(
    4,
    'Project',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'An AI battle arena simulator',
    'Falling Behind',
		{}
  ),
  new Project(
    5,
    'Project',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'An AI battle arena simulator',
    'Completed',
		{}
  ),
  new Project(
    6,
    'Project',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'An AI battle arena simulator',
    'In Progress',
		{}
  )
];


var members = [
  new Member(
    0, 'Benjamin', 'Hough', 'my bio', 'my short bio',
    {
      github: 'https://github.com/whothat'
    },
    ['C++','JavaScript']
  ),
  new Member(
    1, 'Joshua', 'Murphy', 'my bio', 'my short bio',
    {
      github: 'https://github.com/joshuasrjc'
    },
    ['C++','JavaScript']
  ),
  new Member(
    2, 'Erick', 'Sanchez', 'my bio', 'my short bio',
    {
      github: 'https://github.com/LinnierGames'
    },
    ['C++','JavaScript']
  ),
  new Member(
    3, 'Oran', 'Collins', 'my bio', 'my short bio',
    {
      github: 'https://github.com/Pastyguy'
    },
    ['C++','JavaScript']
  )
];

var members_projects = [
  new MembersProjects( 0 , 0 , 0 , 'Co-Lead Developer' ),
  new MembersProjects( 1 , 1 , 0 , 'Lead Developer' ),
  new MembersProjects( 2 , 3 , 1 , 'Creator' ),
  new MembersProjects( 3 , 0 , 1 , 'Co-Lead Developer' ),
  new MembersProjects( 4 , 0 , 2 , 'Programmer' ),
  new MembersProjects( 5 , 0 , 3 , 'Programmer' )
]


var services = {
	github:
	{
		name: 'GitHub',
		icon_sm: 'github-icon-sm.png',
		icon_md: '',
		icon_lg: ''
	},
	waffle:
	{
		name: 'WaffleIO',
		icon_sm: 'waffleio-icon-sm.png',
		icon_md: '',
		icon_lg: ''
	},
	checkvist:
	{
		name: 'Checkvist',
		icon_sm: 'checkvist-icon-sm.png',
		icon_md: '',
		icon_lg: ''
	}
};

module.exports = {
	projects,
	members,
  members_projects,
	services
};
