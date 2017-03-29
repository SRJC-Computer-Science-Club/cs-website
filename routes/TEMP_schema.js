//This will act as temporary database placeholder
var Project = require('./modules/projects')

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

function ProjectsMembers( id, project_id, member_id, role, admin, assignedArea )
{
	this.id = id;
	this.project_id = project_id;
	this.member_id = member_id;
	this.admin = admin;
	this.role = role;

	this.assignedArea = assignedArea;
}

function ProjectAreaRequests( id, project_id, title, description, project_interest, nPositions, assets, author_id)
{
	this.id = id;
	this.project_id = project_id;
	this.title = title;
	this.description = description;
	this.project_interest = project_interest;
	this.nPositions = nPositions;
	this.assets = assets;
	this.author_id = author_id;
}

function ProjectEvent( id, project_id, title, description, description_short, location, date_range, media)
{
	this.id = id;
	this.project_id = project_id;
	this.title = title;
	this.description = description;
	this.description_short = description_short;
	this.location = location;
	this.date_range = date_range;
	this.media = media;
}

function Event( id, title, description, description_short, location, date_range, media)
{
	this.id = id;
	this.title = title;
	this.description = description;
	this.description_short = description_short;
	this.location = location;
	this.date_range = date_range;
	this.media = media;
}

function ClubOfficers( id, member_id, position_title, swatch)
{
	this.id = id;
	this.member_id = member_id;
	this.position_title = position_title;
	this.swatch = swatch;
}

//9
var projects = [
	new Project(1,'CS Website',
		'Not only will this new website show off each of our projects, tasks and quick links to all of our resources and tools the club is using, but it will also become a hub for our new and current members to digest a project and become a great help! Any new top news, upcoming event, and project updates will be posted to our site for everyone to view. My vision in this website is for everyone, members, programmers, and potental members to stay informed about progress and details in every project. Members and potental members can comment and give feedback to any project as a comment feed in each project. Each project contains a detailed description about goals, requirments, and the platform as well as images, list of participating members, and a timeline of events and achivements. As for members, a club member can create a profile and fill in a picture, short and long bios, and show off any work done outside of the club. Quick links will show all of the projects, listed on the website, each member has participated in. As for the About and Contact Us pages, egeryone will have the opprotunuty to ask how to join the club and learn about what we do.',
		'A new website to showoff what we do as a club',
		'In Progress',
		'USE TABS NOT SPACES',
		{},
		{
			checkvist: 'https://checkvist.com/checklists/563656-csc-cs-website',
			figma: 'https://www.figma.com/files/project/64393/Club-Website',
			waffle: 'https://waffle.io/SRJC-Computer-Science-Club/cs-website',
			github: 'https://github.com/SRJC-Computer-Science-Club/cs-website'
		},
		[]
	),
	new Project(9,'Club App',
		'',
		'',
		'In-Progress',
		'Building navigation',
		{},
		{
			invision: 'https://invis.io/K8AX0FZBN',
			figma: 'https://www.figma.com/files/project/161855/Club-App',
			github: 'https://github.com/SRJC-Computer-Science-Club/cs-app-react-native'
		},
		[]
	),
	new Project(7,'SRJC Scheduler',
		'Quickly load classes onto a friendly calendar all at once! If instructors isn\'t your main concern, nicely look at all available times for a course. The SRJC Scheduler is founded and created by <a href="/members/0">Ben Hough</a>',
		'Schedule your next semester with SRJC Scheduler!',
		'Rebuilding',
		'Mockups looking good',
		{},
		{
			scheduler: 'http://srjcscheduler.com/',
			github: 'https://github.com/SRJC-Computer-Science-Club/srjc-scheduler'
		},
		[]
	),
	new Project(5,'Line Follower',
		'',
		'',
		'In Progress',
		'Crunch Time!',
		{},
		{
			robogames: 'http://robogames.net/rules/line-following.php',
			checkvist: 'https://checkvist.com/checklists/581272-csc-line-follower',
			waffle: 'https://waffle.io/SRJC-Computer-Science-Club/line-follower',
			github: 'https://github.com/SRJC-Computer-Science-Club/line-follower'
		},
		[]
	),
	new Project(8,'Dreamscape',
		'',
		'',
		'Blueprinting the GDD',
		'',
		{},
		{
			// checkvist: 'https://checkvist.com/checklists/560653',
			// waffle: 'https://waffle.io/SRJC-Computer-Science-Club/2d-platformer',
			// github: 'https://github.com/SRJC-Computer-Science-Club/2d-platformer'
			drive: 'https://drive.google.com/drive/folders/0B23hDSQTMIITY2hVZ3dzd3NuQm8?usp=sharing'
		},
		[
		]
	),
	new Project(3,'Function Fighters',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'An AI battle arena simulator',
		'Scrimmaging!',
		'Would you like to join?!',
		{},
		{
			github: 'https://github.com/joshuasrjc/function-fighters'
		},
		[]
	),
	new Project(10,'ShortLink',
		"<a href='/members/12'>Kyle</a> joined <a href='/events/0'>Make-a-thon</a> to make his first iOS app. It was a success!<br><br>ShortLink brings link shortening to iOS, once more, using Google's public API to enter any valid url and gives back a working shorten link! This app is used as an introductory to iOS Development.",
		"The first iOS application to make it to the club",
		"In-Progress",
		"Have a Mac? Join the iOS Team",
		{},
		{
			github: 'https://github.com/Kyle1668/Short-Link'
		},
		[]
	),
	new Project(6,'Retailer',
		'Created with <a href="https://unity3d.com" target="_blank">Unity 3D</a>, Retailer is an all-out, in-depth simulation of a store manager. You, the store manager, will control and oversee many things such as who you hire, promote, penaltize and transfer in your store. Chose which vendors you\'d like to partner with as well as what merchandise you\'ll want to sell. Will your store be a grocery store, hardware store or an outlet? Every small detail will be made by you, the store manager.',
		'Retail simulation of everything that has to do with retail.',
		'On-Hold',
		'',
		{},
		{
			checkvist: 'https://checkvist.com/checklists/587081-csc-retail',
			waffle: 'https://waffle.io/SRJC-Computer-Science-Club/Retailer',
			github: 'https://github.com/SRJC-Computer-Science-Club/retailer'
		},
		[
			'preview of ui-1.png',
			'preview-1.jpg',
			'3d model-1.png'
		]
	),
	new Project(0,'Micromouse',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'An autonomous maze solving robot mouse',
		'Archived',
		'',
		{},
		{
			checkvist: 'https://checkvist.com/checklists/542765',
			waffle: 'https://waffle.io/SRJC-Computer-Science-Club/micromouse',
			github: 'https://github.com/SRJC-Computer-Science-Club/micromouse'
		},
		[]
	),
	new Project(4,'Quad-Copter',
		"<a href=/members/3'>I</a> worked on a landmine detection quadcopter with college <a href='/members/9'>Yekalo Aberha</a>. Mr. Aberha and I, coded and build a lidar two diminsional mapping sensor. To create a graph of points to repersent what the sensor is resiving which was edges of objects.<br /><br />x = r × cos( θ )y = r × sin( θ )<br /><br />We found out that the sensor was not working because we needen to conver the rotation of the sensor, into (x,y) coordiates.",
		'',
		'Archived',
		'',
		{},
		{},
		[]
	),
	new Project(2,'2D Platformer',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'A simple 2d platformer game',
		'Resigned',
		'',
		{},
		{
			checkvist: 'https://checkvist.com/checklists/560653',
			waffle: 'https://waffle.io/SRJC-Computer-Science-Club/2d-platformer',
			github: 'https://github.com/SRJC-Computer-Science-Club/2d-platformer'
		},
		[
			'main-character-1.png',
			'main-character-2.png',
			'main-character-3.png',
			'main-character-sprite-1.png'
		]
	)
];

//25
var members = [
	new Member(2, 'Erick', 'Sanchez',
		'Began programming since GameMaker was installed on the computer of my 8th grade English class. Made a game from complete scratch and messing around with my friends watching me make a face follow the cursor then something shooting at the face! And this is how Face Game was made, a simple concept turned into something amusing. This game was a hit for too many students during English D: But I expanded to the iPhone, the Mac World! And I\'ll never go back, to PC *cough*. I planned to recreate the Face Game on the iOS with all new faces and cooler stuff because it\'s on the phone. Butt I was too intrested in making other iOS apps and created a few utilities enough to make myself noticed for a client. I programmed and designed an application for a client, George Moskoff. George was the sole creator of Kids-Self Evaluation. This app is sold on the iPhone AppStore. I learned to making my own apps to sell on the AppStore, Mulah, iLogs, Assigned, and whatever else comes out of my head :)',
		'Making apps on the iPhone and on other platforms.',
		{
			github: 'https://www.GitHub.com/LinnierGames',
			linkedin: 'https://www.LinkedIn.com/in/erick-sanchez-84083171/',
			facebook: 'https://www.Facebook.com/erick.sanchez.988926',
			twiter: 'https://www.Twitter.com/Linnier__Games',
		},
		'esericksanc@gmail.com',
		[
			'C++','JavaScript','Objective-C','HTML & CSS'
		]
	),
	new Member(1, 'Joshua', 'Murphy',
		'my bio',
		undefined,
		{
			github: 'https://www.github.com/joshuasrjc'
		},
		undefined,
		[
			'C++','JavaScript'
		]
	),
	new Member(4, 'Steven', 'Guido',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(12, 'Kyle', 'O\'Brien',
		'Hey! I\'m a professional novice. My skills lie primarly in C++ and Front-End Web technologies. I\'m currently learning Objective-C and Swift for an internship this summer. ',
		'A Professional Novice',
		{
			personal_site: "www.Linkedin.com/in/kyle1668"
		},
		'kyleobrien01@comcast.net',
		[
			'C++',
			'Javascript',
			'Swift',
			'Objective-C'
		]
	),
	new Member(11, 'Junior', 'Diarrassouba',
		'',
		undefined,
		{},
		'juniordiarrassouba1@gmail.com',
		[
			'C++',
			'Java',
			'HTML/CSS',
			'JavaScript'
		]
	),
	new Member(14, 'Austin', 'Meyer',
		'',
		'Game Designer and Developer! Also know C++, Java, and Javascript',
		{},
		'meyerforge@gmail.com',
		[
			'C++',
			'Java',
			'JavaScript'
		]
	),
	new Member(15, 'Isaiah', 'Curtis',
		'',
		'Interested in machine learning and low level programming',
		{},
		'17ijcurtis@gmail.com',
		[]
	),
	new Member(16, 'Noah', 'Tarr',
		undefined,
		'Second semester at JC. Learning C++ and Java. Computer Engineering major. Know JavaScript, Some PHP, CSS, and HTML.',
		{
			personal_site: 'http://www.noahtarr.com/'
		},
		undefined,
		[
			'C++',
			'Java',
			'HTML',
			'CSS',
			'JavaScript',
			'PHP'
		]
	),
	new Member(19, 'Erik', 'Fisher',
		'I am passionate about app development for mobile platforms and becoming a well rounded software developer.',
		'I like to code apps and for other fun projects',
		{},
		undefined,
		[
			'C++',
			'Java',
			'Swift',
			'HTML/CSS',
			'Assembly'
		]
	),
	new Member(22, 'Duncan', 'MacDonald',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(20, 'Adam', 'Ahrens',
		'my bio',
		undefined,
		{},
		undefined,
		[

		]
	),
	new Member(24, 'Greg', 'Maddox',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(3, 'Oran', 'C',
		'I started programming with HTML*, in highschool just for fun. I really got into real programming when I built a Bluetooth robot from scratch which, over the summer, I started learning JavaScript from an online self paced tutorial, and that transitioned into taking C++. I\'m currently learning python right now.',
		'I\'ve built and been running a Ubuntu server, and also have been running and handling with server software for about a year now. I\'m comfortable with using GNU/Linux.',
		{
			github: 'https://www.GitHub.com/Pastyguy'
		},
		undefined,
		[
			'C++','HTML & CSS', 'python', 'JavaScript', 'BASH'
		]
	),
	new Member(17, 'Spencer', 'Kelly',
		'',
		'Student, currently building a general knowledge of programming with a specific focus on Deep Learning.',
		{
			github: 'https://www.GitHub.com/ablacklama'
		},
		'ablacklama@gmail.com',
		[
			'C++',
			'Java',
			'C',
			'HTML/CSS',
			'JavaScript',
			'Python'
		]
	),
	new Member(23, 'Andrew', 'Rodrigues',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(25, 'Juan', 'Rios',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(21, 'Ashley', 'Harrison',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(18, 'Travis', 'Carpenter',
		'my bio',
		undefined,
		{},
		undefined,
		[

		]
	),
	new Member(10, 'Alex', 'Dewey',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(13, 'Eli', 'Krause',
		'my bio',
		undefined,
		{},
		undefined,
		[
			'HTML & CSS'
		]
	),
	new Member(8, 'Wind', 'Schneidenbach',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(5, 'Alex', 'Chen',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(6, 'Noah', 'Torrez',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(7, 'Conan', 'Skaife',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(0, 'Benjamin', 'Hough',
		'my bio',
		undefined,
		{
			github: 'https://www.github.com/whothat'
		},
		undefined,
		['C++','JavaScript']
	),
	new Member(9, 'Yekalo', 'Aberha',
		'my bio',
		undefined,
		{
			github: 'https://www.github.com/yyekalo'
		},
		undefined,
		[]
	)
];

var members_projects = [
	//Micromouse
	new ProjectsMembers( 15 , 0 , 9 , 'Co-Lead Developer', true ),
	new ProjectsMembers( 0 , 0 , 0 , 'Co-Lead Developer', true ),
	new ProjectsMembers( 3 , 0 , 1 , 'Co-Lead Developer', true ),
	new ProjectsMembers( 4 , 0 , 2 , 'Programmer' ),
	new ProjectsMembers( 5 , 0 , 3 , 'Programmer' ),
	//CS Website
	new ProjectsMembers( 6 , 1 , 2 , 'Project Manager', true ),
	new ProjectsMembers( 1 , 1 , 0 , 'Lead Developer', true ),
	new ProjectsMembers( 49 , 1 , 23 , 'Programmer' ),
	new ProjectsMembers( 33 , 1 , 16 , 'Programmer' ),
	new ProjectsMembers( 34 , 1 , 19 , 'Programmer' ),
	new ProjectsMembers( 27 , 1 , 11 , 'Programmer' ),
	new ProjectsMembers( 22 , 1 , 5 , 'Programmer' ),
	new ProjectsMembers( 12 , 1 , 8 , 'Programmer' ),
	new ProjectsMembers( 26 , 1 , 13 , 'Programmer' ),
	//2D Platformer
	new ProjectsMembers( 10 , 2 , 2 , 'Project Manager', true ),
	//Function Fighters
	new ProjectsMembers( 2 , 3 , 1 , 'Project Manager & AI Player', true ),
	new ProjectsMembers( 9 , 3 , 3 , 'Beta Tester, AI Player' ),
	new ProjectsMembers( 43 , 3 , 14 , 'AI Player' ),
	new ProjectsMembers( 7 , 3 , 2 , 'AI Player' ),
	new ProjectsMembers( 8 , 3 , 4 , 'AI Player' ),
	new ProjectsMembers( 36 , 3 , 19 , 'AI Player' ),
	//Quad-Copter
	new ProjectsMembers( 14 , 4 , 9 , 'Lead Developer', true ),
	new ProjectsMembers( 13 , 4 , 3 , 'Developer', true ),
	//Line Follower
	new ProjectsMembers( 17 , 5 , 4 , 'Project Manager', true ),
	new ProjectsMembers( 18 , 5 , 1 , 'Lead Developer' ),
	new ProjectsMembers( 19 , 5 , 3 , 'Developer' ),
	new ProjectsMembers( 25 , 5 , 10 , 'Programmer' ),
	new ProjectsMembers( 20 , 5 , 6 , 'Programmer' ),
	new ProjectsMembers( 30 , 5 , 15 , 'Programmer' ),
	new ProjectsMembers( 24 , 5 , 8 , 'Programmer' ),
	new ProjectsMembers( 23 , 5 , 12 , 'Programmer' ),
	new ProjectsMembers( 21 , 5 , 2 , 'Programmer' ),
	//Retailer
	new ProjectsMembers( 28 , 6 , 2 , 'Project Manager', true ),
	new ProjectsMembers( 29 , 6 , 14 , 'Developer' ),
	new ProjectsMembers( 39 , 6 , 18 , 'Programmer' ),
	//srjc-scheduler
	new ProjectsMembers( 30 , 7 , 0 , 'Project Founder', true ),
	new ProjectsMembers( 31 , 7 , 1 , 'Developer' ),
	new ProjectsMembers( 50 , 7 , 20 , 'Developer' ),
	new ProjectsMembers( 32 , 7 , 2 , 'Programmer' ),
	new ProjectsMembers( 44 , 7 , 17 , 'Programmer' ),
	new ProjectsMembers( 35 , 7 , 19 , 'Programmer' ),
	new ProjectsMembers( 47 , 7 , 11 , 'Programmer' ),
	//Dreamscape
	new ProjectsMembers( 36 , 8 , 15 , 'Project Manager', true ),
	new ProjectsMembers( 37 , 8 , 2 , 'Programmer' ),
	new ProjectsMembers( 40 , 8 , 17 , 'Programmer' ),
	new ProjectsMembers( 42 , 8 , 14 , 'Programmer' ),
	//Club App
	new ProjectsMembers( 38 , 9 , 2 , 'Project Manager', true ),
	new ProjectsMembers( 49 , 9 , 20 , 'Developer' ),
	new ProjectsMembers( 46 , 9 , 19 , 'Programmer' ),
	new ProjectsMembers( 45 , 9 , 16 , 'Programmer' ),
	new ProjectsMembers( 48 , 9 , 11 , 'Programmer' ),
	//ShortLink
	new ProjectsMembers( 51 , 10 , 12 , 'Project Manager', true ),
	new ProjectsMembers( 52 , 10 , 2 , 'Developer')
];
//50
//0-ben 1-joshua 2-erick 3-oran 4-steven 5-alex chen chen 6-noah 7-conan 8-wind
//9-yekalo 10-alex dewey 11-junior 12-kyle 13-eli 14-austin 15-isaiah 16-noah
//17-spencer 18-travis 19-erik 20-adam 21-ashley 22-duncan 23-andrew 24-greg
//25-juan
//0-micromouse 1-cs website 2-plattformer 3-function fighters 4-Quad-Copter
//5-line follower 6-retailer 7-srjc-schduler 8-dreamscape 9-club app



//11
var project_area_requests = [
	//CS Website
	new ProjectAreaRequests( 0, 1,"Front-End Developers",
		"Help program and design the front-end of our website. This will not only help mask and structure our website, but also help make this site responsive to all platforms.",
		":4", 3,
		[
			{title: "HTML/CSS/Bootstrap", experience: 3},
			{title: "Java Script", experience: 1}
		],
		2
	),
	new ProjectAreaRequests( 1, 1,"Back-End Developers",
		"Check out <a href=\"https://www.mongodb.com/\">MongoDB</a> for our technologies for backend",
		":3", 2,
		[
			{title: "MongoDB/Moongse", experience: 4}
		],
		2
	),
	//function-fighters
	new ProjectAreaRequests( 2, 3,"AI Players",
		"",
		"Welcome!:2", "&#8734",
		[
			{title: "Lua", experience: 1}
		],
		1
	),
	//Line-Follower
	new ProjectAreaRequests( 11, 5,"Hardware Designers",
		"",
		":3", 0,
		[
			{title: 'C++', experience: 3},
			{title: 'Arduino', experience: 2}
		],
		2
	),
	//Retailer
	new ProjectAreaRequests( 3, 6,"Game Developers",
		"",
		":5", 4,
		[
			{title: "Unity", experience: 4}
		],
		2
	),
	new ProjectAreaRequests( 4, 6,"Graphic/Asset Designers",
		"",
		":3", 1,
		[
			{title: "Adobe Animate", experience: 5},
			{title: "Vector Based Program", experience: 3}
		],
		2
	),
	new ProjectAreaRequests( 5, 6,"Back-End Developer",
		"",
		":1", 1,
		[],
		2
	)
];

//0
var project_events = [
	new ProjectEvent( 0, 5,'RoboGames—Line Follower',
		'description',
		'Robotics competition for our line follower project.',
		'Pleasanton, CA',
		'April 21, 2017',
		[
			{caption: '2017 Robotic Games', image: 'robo-games-17/robo-games-header.jpg', url: 'http://robogames.net/rules/line-following.php'},
			{caption: 'Our Line Follower!', image: 'linefollower-1.jpg', url: '/projects/5'}
		]
	)
]

var events = [
	new Event(0, '2017 Make-a-thon',
		'description',
		'Rohnert Park\'s Make-a-thon event!',
		'Rohnert Park, CA',
		'March 4, 2017',
		[
			{caption: 'Google Drive Folder', image: 'drive.png', url: 'https://drive.google.com/drive/folders/0B3wyRcLxpH4jSHA2NjF1Nkk2S00?usp=sharing'},
			{caption: 'Prize Winners!', image: '2017 make-a-thon/team-winners.jpg', url: 'http://drive.google.com/uc?export=view&id=0B3wyRcLxpH4jRkVFNG5WU1ctSFk'},
			{caption: 'The Teams', image: '2017 make-a-thon/club.jpg', url: 'http://drive.google.com/uc?export=view&id=0B3wyRcLxpH4jcU93OTJUdlRpNG8'}
		]
	),
	new Event( 1,'Hackathon',
		'description',
		'',
		'San Fransisco, CA',
		'Feburary 11, 2017',
		[
			{caption: 'Developer Week', image: 'dev-week/hackathon-1.png', url: 'http://www.developerweek.com/hackathon/'}
		]
	),
	new Event( 2,' Keysight Trip',
		'Check out this trip at the weekly meeting!',
		'',
		'1400 Fountaingrove Pkwy, Santa Rosa, CA 95403',
		'TBA',
		[]
	)
]

//Global instances for icons
var services = {
	noone:
	{
		name: 'Link',
		icon_sm: 'link-icon-42@2x.png',
		icon_md: '',
		icon_lg: ''
	},
	github:
	{
		name: 'GitHub',
		icon_sm: 'github-icon-42@2x.png',
		icon_md: '',
		icon_lg: ''
	},
	waffle:
	{
		name: 'WaffleIO',
		icon_sm: 'waffleio-icon-42@2x.png',
		icon_md: '',
		icon_lg: ''
	},
	drive:
	{
		name: 'Google Drive',
		icon_sm: 'drive-icon-42@2x.png',
		icon_md: '',
		icon_lg: ''
	},
	checkvist:
	{
		name: 'Checkvist',
		icon_sm: 'checkvist-icon-42@2x.png',
		icon_md: '',
		icon_lg: ''
	},
	figma:
	{
		name: 'Figma',
		icon_sm: 'figma-icon-42@2x.png',
		icon_md: '',
		icon_lg: ''
	}
};

var club_officers =
[
	new ClubOfficers( 0, 2, 'President', "#055B75"),
	new ClubOfficers( 1, 1, 'Vice<br>President', "#0D94BD"),
	new ClubOfficers( 2, 4, 'Treasurer<br>& ICC Rep', '#579C08'),
	new ClubOfficers( 3, 12, 'Secretary', '#579C08'),
	new ClubOfficers( 4, 14, 'ICC Rep', '#EEA00E'),
	new ClubOfficers( 5, 16, 'ICC Rep', '#EEA00E')
];

module.exports = {
	projects,
	members,
	members_projects,
	project_area_requests,
	project_events,
	events,
	services,
	club_officers
};

Project.prototype.isProjectAdmin = function(member)
{
	for ( var link of members_projects) {
		if (link.project_id == this.id) {
			if (link.member_id == member.id) {
				return link.admin;
			}
		}
	}

	return false;
}