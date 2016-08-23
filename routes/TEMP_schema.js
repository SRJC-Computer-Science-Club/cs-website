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
  ),
  new Project(
    7,
    'Project',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'An AI battle arena simulator',
    'Completed',
		{}
  )
];


var members = [
  new Member(
    0, 'Benjamin', 'Hough', 'my bio', undefined,
    {
      github: 'https://github.com/whothat'
    },
		undefined,
    ['C++','JavaScript']
  ),
  new Member(
    1, 'Joshua', 'Murphy', 'my bio', undefined,
    {
      github: 'https://github.com/joshuasrjc'
    },
		undefined,
    ['C++','JavaScript']
  ),
  new Member(
    2, 'Erick',
		'Sanchez',
		'Began programming since GameMaker was installed on the computer of my 8th grade English class. Made a game from complete scratch and messing around with my friends watching me make a face follow the cursor then something shooting at the face! And this is how Face Game was made, a simple concept turned into something amusing. This game was a hit for too many students during English D: But I expanded to the iPhone, the Mac World! And I\'ll never go back, to PC *cough*. I planned to recreate the Face Game on the iOS with all new faces and cooler stuff because it\'s on the phone. Butt I was too intrested in making other iOS apps and created a few utilities enough to make myself noticed for a client. I programmed and designed an application for a client, George Moskoff. George was the sole creator of Kids-Self Evaluation. This app is sold on the iPhone AppStore. I learned to making my own apps to sell on the AppStore, Mulah, iLogs, Assigned, and whatever else comes out of my head :)',
		'Making apps on the iPhone and other projects.',
    {
      github: 'https://github.com/LinnierGames',
      facebook: 'https://www.facebook.com/erick.sanchez.988926',
			twiter: 'https://twitter.com/Linnier__Games'
    },
		'esericksanc@gmail.com',
    ['C++','JavaScript','Objective-C','HTML & CSS']
  ),
  new Member(
    3, 'Oran', 'Collins', 'my bio', undefined,
    {
      github: 'https://github.com/Pastyguy'
    },
		undefined,
    ['C++','JavaScript']
  )
];

var members_projects = [
  new MembersProjects( 0 , 0 , 0 , 'Co-Lead Developer' ),
  new MembersProjects( 1 , 1 , 0 , 'Lead Developer' ),
  new MembersProjects( 2 , 3 , 1 , 'Creator' ),
  new MembersProjects( 3 , 0 , 1 , 'Co-Lead Developer' ),
  new MembersProjects( 4 , 0 , 2 , 'Programmer' ),
  new MembersProjects( 5 , 0 , 3 , 'Programmer' ),
  new MembersProjects( 6 , 1 , 2 , 'Designer' )
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
