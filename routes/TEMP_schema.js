//This will act as temporary database placeholder


function Project( id, title, description, description_short, status, post, milestones, links, images )
{
	this.id = id;
	this.title = title;
	this.description = description;
	this.description_short = description_short;
	this.status = status;
	this.post = post;
	this.milestones = milestones;
	this.links = links;
	this.images = images;
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

function ProjectsMembers( id, project_id, member_id, role, assignedArea )
{
	this.id = id;
	this.project_id = project_id;
	this.member_id = member_id;
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

//10
var projects = [
	new Project(1,'CS Website',
		'Not only will this new website show off each of our projects, tasks and quick links to all of our resources and tools the club is using, but it will also become a hub for our new and current members to digest a project and become a great help! Any new top news, upcoming event, and project updates will be posted to our site for everyone to view. My vision in this website is for everyone, members, programmers, and potental members to stay informed about progress and details in every project. Members and potental members can comment and give feedback to any project as a comment feed in each project. Each project contains a detailed description about goals, requirments, and the platform as well as images, list of participating members, and a timeline of events and achivements. As for members, a club member can create a profile and fill in a picture, short and long bios, and show off any work done outside of the club. Quick links will show all of the projects, listed on the website, each member has participated in. As for the About and Contact Us pages, egeryone will have the opprotunuty to ask how to join the club and learn about what we do.',
		'A new website to showoff what we do as a club',
		'In Progress',
		'Finalizing the Resources Tab',
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
	new Project(11,'Space Junkies',
		'I am heading the design and production of Space Junkies with a wonderful team! The game is still in its youth, but we are getting a lot done. We hope to share more information about this game in the following months.',
		'I am heading the design and production for Space Junkies with a wonderful team!',
		'In Progress',
		'',
		{},
		{
			github: 'https://github.com/SRJC-Computer-Science-Club/Ludum-Dare-38-Space-Junkies',
			waffle: 'https://waffle.io/SRJC-Computer-Science-Club/Ludum-Dare-38-Space-Junkies',
			drive: 'https://drive.google.com/drive/folders/0B3wyRcLxpH4jXzRDMHdROW9ENTg?usp=sharing',
			checkvist: 'https://checkvist.com/checklists/614869-csc-space-junkies'
		},
		[
		]
	),
	new Project(8,'Dreamscape',
		'',
		'',
		'Resigned',
		'',
		{},
		{
			drive: 'https://drive.google.com/drive/folders/0B23hDSQTMIITY2hVZ3dzd3NuQm8?usp=sharing'
		},
		[
		]
	),
	new Project(0,'Micromouse',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'An autonomous maze solving robot mouse',
		'Rebuilding',
		'',
		{},
		{
			checkvist: 'https://checkvist.com/checklists/542765',
			waffle: 'https://waffle.io/SRJC-Computer-Science-Club/micromouse',
			github: 'https://github.com/SRJC-Computer-Science-Club/micromouse'
		},
		[]
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

//30
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
	new Member(14, 'Austin', 'Meyer',
		'I am a fledgling game designer seeking to develop his skills and create wonderful pieces of art/entertainment. I have some education in C++, Java, and Unity C#. My preferred engine right now is Unity and I hope to become certified in the next year or so.',
		'Game Designer and Developer! Also know C++, Java, and Javascript',
		{},
		'meyerforge@gmail.com',
		[
			'C++',
			'Java',
			'C#'
		]
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
	new Member(20, 'Adam', 'Ahrens',
		'my bio',
		undefined,
		{},
		undefined,
		[

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
	new Member(26, 'Alejandro', 'Fernandez',
		'my bio',
		'I enjoy long walks on the beach',
		{},
		'alexotter@ymail.com',
		[
			'C++'
		]
	),
	new Member(27, 'Jameson', 'Danning',
		'my bio',
		undefined,
		{},
		undefined,
		[]
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
	new Member(28, 'Andrew', 'Eljumaily',
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
	new Member(29, 'Roman', 'Ruano',
		'my bio',
		undefined,
		{},
		undefined,
		[

		]
	),
	new Member(30, 'Julie', 'Levine',
		'my bio',
		undefined,
		{},
		undefined,
		[

		]
	),
	new Member(15, 'Isaiah', 'Curtis',
		'',
		'Interested in machine learning and low level programming',
		{},
		'17ijcurtis@gmail.com',
		[]
	),
	new Member(24, 'Greg', 'Maddox',
		'my bio',
		undefined,
		{},
		undefined,
		[]
	),
	new Member(23, 'Andrew', 'Rodrigues',
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
	new ProjectsMembers( 15 , 0 , 9 , 'Co-Lead Developer' ),
	new ProjectsMembers( 0 , 0 , 0 , 'Co-Lead Developer' ),
	new ProjectsMembers( 3 , 0 , 1 , 'Co-Lead Developer' ),
	new ProjectsMembers( 4 , 0 , 2 , 'Programmer' ),
	new ProjectsMembers( 5 , 0 , 3 , 'Programmer' ),
	//CS Website
	new ProjectsMembers( 6 , 1 , 2 , 'Project Manager' ),
	new ProjectsMembers( 1 , 1 , 0 , 'Lead Developer' ),
	new ProjectsMembers( 49 , 1 , 23 , 'Programmer' ),
	new ProjectsMembers( 54 , 1 , 26 , 'Programmer' ),
	//2D Platformer
	new ProjectsMembers( 10 , 2 , 2 , 'Project Manager' ),
	//Function Fighters
	new ProjectsMembers( 2 , 3 , 1 , 'Project Manager & AI Player' ),
	new ProjectsMembers( 9 , 3 , 3 , 'Beta Tester, AI Player' ),
	new ProjectsMembers( 43 , 3 , 14 , 'AI Player' ),
	new ProjectsMembers( 7 , 3 , 2 , 'AI Player' ),
	new ProjectsMembers( 8 , 3 , 4 , 'AI Player' ),
	new ProjectsMembers( 36 , 3 , 19 , 'AI Player' ),
	//Quad-Copter
	new ProjectsMembers( 14 , 4 , 9 , 'Lead Developer' ),
	new ProjectsMembers( 13 , 4 , 3 , 'Developer' ),
	//Line Follower
	new ProjectsMembers( 17 , 5 , 4 , 'Project Manager' ),
	new ProjectsMembers( 18 , 5 , 1 , 'Lead Developer' ),
	new ProjectsMembers( 19 , 5 , 3 , 'Developer' ),
	new ProjectsMembers( 25 , 5 , 10 , 'Programmer' ),
	new ProjectsMembers( 20 , 5 , 6 , 'Programmer' ),
	new ProjectsMembers( 30 , 5 , 15 , 'Programmer' ),
	new ProjectsMembers( 24 , 5 , 8 , 'Programmer' ),
	new ProjectsMembers( 23 , 5 , 12 , 'Programmer' ),
	new ProjectsMembers( 21 , 5 , 2 , 'Programmer' ),
	//Retailer
	new ProjectsMembers( 28 , 6 , 2 , 'Project Manager' ),
	new ProjectsMembers( 29 , 6 , 14 , 'Developer' ),
	new ProjectsMembers( 39 , 6 , 18 , 'Programmer' ),
	//srjc-scheduler
	new ProjectsMembers( 30 , 7 , 0 , 'Project Founder' ),
	new ProjectsMembers( 31 , 7 , 1 , 'Developer' ),
	new ProjectsMembers( 50 , 7 , 20 , 'Developer' ),
	new ProjectsMembers( 32 , 7 , 2 , 'Programmer' ),
	new ProjectsMembers( 44 , 7 , 17 , 'Programmer' ),
	new ProjectsMembers( 35 , 7 , 19 , 'Programmer' ),
	new ProjectsMembers( 47 , 7 , 11 , 'Programmer' ),
	//Dreamscape
	new ProjectsMembers( 36 , 8 , 15 , 'Project Manager' ),
	new ProjectsMembers( 37 , 8 , 2 , 'Programmer' ),
	new ProjectsMembers( 40 , 8 , 17 , 'Programmer' ),
	new ProjectsMembers( 42 , 8 , 14 , 'Programmer' ),
	//Club App
	new ProjectsMembers( 38 , 9 , 2 , 'Project Manager' ),
	new ProjectsMembers( 49 , 9 , 20 , 'Developer' ),
	new ProjectsMembers( 46 , 9 , 19 , 'Programmer' ),
	new ProjectsMembers( 45 , 9 , 16 , 'Programmer' ),
	new ProjectsMembers( 48 , 9 , 11 , 'Programmer' ),
	new ProjectsMembers( 53 , 9 , 26 , 'Programmer'),
	//ShortLink
	new ProjectsMembers( 51 , 10 , 12 , 'Project Manager'),
	new ProjectsMembers( 52 , 10 , 2 , 'Developer'),
	//Space Junkies
	new ProjectsMembers( 55 , 11 , 14 , 'Project Manager'),
	new ProjectsMembers( 56 , 11 , 2 , 'Programmer'),
	new ProjectsMembers( 57 , 11 , 28 , 'Programmer'),
	new ProjectsMembers( 58 , 11 , 27 , 'Assets'),
	new ProjectsMembers( 59 , 11 , 29 , 'Assets'),

];
//54
//0-ben 1-joshua 2-erick 3-oran 4-steven 5-alex chen chen 6-noah 7-conan 8-wind
//9-yekalo 10-alex dewey 11-junior 12-kyle 13-eli 14-austin 15-isaiah 16-noah
//17-spencer 18-travis 19-erik 20-adam 21-ashley 22-duncan 23-andrew 24-greg
//25-juan 26-alex frenandez 27-jameson 28-andrew eljumaily 29-roman 30-Julie

//0-micromouse 1-cs website 2-plattformer 3-function fighters 4-Quad-Copter
//5-line follower 6-retailer 7-srjc-schduler 8-dreamscape 9-club app
//10-short link 11-space junkies



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
		'The 13th annual games will be held Apr 21-23, 2017. First, second, and third places finishers in all categories receive medals (gold, silver, or bronze respectively). Robots that don\'t fit into a specific category can enter "Best of Show" which can be any kind of robot doing anything. Junior League events are specifically set-up for robot builders under 18. "Entry Fees" are the cost to compete, not the cost for an audience ticket.<br><br>The club is attending the Sunday events to compete our Line Follower bot, IG-88B, as well as watching <a href="http://robogames.net/events.php">all the other events</a> the same day. Be sure to attend, or stay in touch with the PM, the weekly meetings to participate in this event.',
		'Robotics competition for our line follower project.',
		'Pleasanton, CA',
		'April 21, 2017',
		[
			{caption: '2017 Robotic Games', image: 'robo-games-17/robo-games-header.jpg', url: 'http://robogames.net/rules/line-following.php'},
			{caption: 'Our Line Follower!', image: 'linefollower-1.jpg', url: '/projects/5'},
			{caption: 'At the Competition!', image: 'robo-games-17/comp-1.jpg', url: '/images/projects/line follower/events/robo-games-17/comp-1.jpg'},
			{caption: 'The Team', image: 'robo-games-17/team-1.jpg', url: '/images/projects/line follower/events/robo-games-17/team-1.jpg'},
			{caption: 'Our 3rd place bot!', image: 'robo-games-17/metal-1.jpg', url: '/images/projects/line follower/events/robo-games-17/metal-1.jpg'},
			{caption: 'To the battle bots we go', image: 'robo-games-17/team-2.jpg', url: '/images/projects/line follower/events/robo-games-17/team-2.jpg'},
			{caption: 'Watching them bots!', image: 'robo-games-17/team-3 copy.jpg', url: '/images/projects/line follower/events/robo-games-17/team-3 copy.jpg'},
			{caption: 'Google Drive Folder', image: 'drive.png', url: 'https://drive.google.com/drive/folders/0B3wyRcLxpH4jX1BEN0tDMVI1bjQ?usp=sharing'}
		]
	),
	new ProjectEvent( 1, 11, 'Ludum Dare',
		'Themes are suggested and chosen by the community. Theme Suggestions are accepted starting 5 weeks before the event. Theme Voting kicks off 2 weeks before the event. Ludum Dare games are submitted to 1 of 2 categories: the Jam or the Compo.</p><h3>The Jam</h2><p>The Jam is the Ludum Dare event for everyone. Teams, individuals, anyone that wants to come out and make something.<ol><li><p>Work alone or in a team.</p></li><li><p>Create a game in 72 hours.</p></li></ol><p>You’re free to use any tools or libraries to create your game. You’re free to start with any base-code you may have. You’re free to use 3rd party Artwork/Music/Audio assets, or assets you previously created, but we ask that you OPT-OUT of the respected voting categories (Graphics, Audio). You can opt-out of a voting category when you submit your game. We strongly recommend you only use assets that you have the legal right to use (Public Domain, things you licensed/created, etc). If you don’t have the right to use something, it is your responsibility.</p><h3>The Compo</h3><p>The Compo is Classic Ludum Dare. Another way to think of it is as Ludum Dare “Hard Mode”. Compo games are created entirely from scratch (**) by one person, in just 48 hours. This is the ultimate test of your game creation skills.<ol><li><p>You must work alone (solo).</p></li><li><p>Your game, all your content (i.e. Art, Music, Sound, etc) must be created in 48 hours.</p></li><li><p>Source code must be included.</p></li></ol><p>You’re free to use any tools or libraries to create your game. You’re free to start with any base-code you may have. At the end, you will be required to share your source code.<br><br>TIP: Compo games are typically reviewed harsher than Jam games. If your game closely resembles a sample game that comes with a development tool, it probably wont get a good score. Be sure to fully customize, and make the game your own.</p>',
		'Ludum Dare is an event where you create a game from scratch in a weekend based on a theme.',
		'Online Event',
		'April 21, 2017',
		[
			{caption: 'Visit the new site', image: 'ludm-dare-1.png', url: 'https://ldjam.com/'}
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
	new Event( 2,'Tour at Keysight',
		"<p class=header>Unlocking Measurement Insights for 75 Years</p>\
		<p>In high technology, the key to success is delivering what's next. First. We are Keysight Technologies, a brand new company with over 75 years of electronic test and measurement success under our belts. Founded in 1939 by Bill Hewlett and David Packard as HP, our expertise continued as Agilent Technologies Electronic Measurement Group.<br><br>\
		Today, Keysight is 100% focused on helping companies tackle the toughest electronic design, test and measurement challenges through a combination of trusted hardware, innovative software and our own global team of industry experts. The result? Insights that lead to innovation. From home entertainment to network reliability to communicating wirelessly, Keysight provides the measurement capabilities that make our world more productive and a safer place to live.\
		More info <a href=http://about.keysight.com/en/index.shtml target=_blank>here</a>.</p>\
		<p class=header>Be sure to check out the weekly meetings!</p>\
		<p>Since there will be an offical roster sent to Keysight, if you'd like to join this tour, be sure to make it to a weekly meeting or message <a href=/members/2/>Erick</a> on slack before April 24th. Some information other than your name is required.</p>",
		'Check out this trip at the weekly meeting!',
		'1400 Fountaingrove Pkwy, Santa Rosa, CA 95403',
		'April 28, 2017',
		[]
	),
	new Event( 4, 'Markafaire',
		"<p>Part science fair, part county fair, and part something entirely new, Maker Faire is an all-ages gathering of tech enthusiasts, crafters, educators, tinkerers, hobbyists, engineers, science clubs, authors, artists, students, and commercial exhibitors. All of these “makers” come to Maker Faire to show what they have made and to share what they have learned.</p>\
		<p>The launch of Maker Faire in the Bay Area in 2006 demonstrated the popularity of making and interest among legions of aspiring makers to participate in hands-on activities and learn new skills at the event. A record 215,000 people attended the two flagship Maker Faires in the Bay Area and New York in 2014, with 44% of attendees first timers at the Bay Area event, and 61% in New York. A family-friendly event, 50% attend the event with children. Also in 2014, 119 independently-produced Mini and 14 Featured Maker Faires occurred around the world, including Tokyo, Rome, Detroit, Oslo and Shenzhen.</p>\
		<p>Maker Faire is primarily designed to be forward-looking, showcasing makers who are exploring new forms and new technologies. But it’s not just for the novel in technical fields; Maker Faire features innovation and experimentation across the spectrum of science, engineering, art, performance and craft.</p>\
		<p>Maker Faire is a gathering of fascinating, curious people who enjoy learning and who love sharing what they can do. It’s a venue for makers to show examples of their work and interact with others about it. Many makers say they have no other place to share what they do. DIY (Do-It-Yourself) is often invisible in our communities, taking place in shops, garages and on kitchen tables. It’s typically out of the spotlight of traditional art or science or craft events. Maker Faire makes visible these projects and ideas that we don’t encounter every day.</p>\
		<p>Maker Faire is brought to you by Maker Media.  Maker Media publishes Make: magazine, produces Maker Faire, and offers DIY electronics, tools, kits, and books through its online and pop-up Maker Shed stores. More info <a href=http://makerfaire.com/bay-area/ target=_blank>here</a></p>\
		<iframe width=352.5 height=198.5 src=https://www.youtube.com/embed/RD_JpGgUFQQ frameborder=0 allowfullscreen></iframe>",
		"Maker Faire is the Greatest Show (and Tell) on Earth—a family-friendly festival of invention, creativity and resourcefulness, and a celebration of the Maker movement!",
		"San Mateo County Event Center, 1346 Saratoga Drive, San Mateo, CA 94403",
		'May 19, 2017',
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
	new ClubOfficers( 0, 1, 'President', "#055B75"),
	new ClubOfficers( 1, 12, 'Vice<br>President', "#0D94BD"),
	new ClubOfficers( 2, 20, 'Treasurer<br>& ICC Rep', '#579C08'),
	new ClubOfficers( 3, 2, 'Secretary', '#579C08'),
	new ClubOfficers( 4, -1, 'ICC Rep', '#EEA00E'),
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
