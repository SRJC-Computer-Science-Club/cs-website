//This will act as temporary database placeholder

function Category( id, title, description, image, tutorials, published )
{
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.tutorials = tutorials;
    this.isPublished = published;
}

function Tutorial( id, title, description, description_short, difficulty, nDownloads, nLikes, nDislikes, lessons, published )
{
    this.id = id;
    this.title = title;
    this.description = description;
    this.description_short = description_short;
    this.difficulty = difficulty; //1 beginner 2 intermediate 3 advanced
    this.nDownloads = nDownloads;
    this.nLikes = nLikes;
    this.nDislikes = nDislikes;
    this.lessons = lessons;
    this.isPublished = published;
}

function Lesson( id, title, description, description_short, content, published)
{
    this.id = id;
    this.title = title;
    this.description = description;
    this.description_short = description_short;
    this.content = content;
    this.isPublished = published;
}

Lesson.prototype.addBodyText = function( content )
{
    this.content.push({type: 'body', value: content});
}

Lesson.prototype.addList = function( content )
{
    this.content.push({type: 'list', value: content});
}

Lesson.prototype.addImage = function( content )
{
    this.content.push({type: 'image', value: content});
}

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

class Member
{
	constructor( id, first_name, last_name, bio, bio_short, links, email, languages ) {
			this.id = id;
			this.first_name = first_name;
			this.last_name = last_name;
			this.bio = bio;
			this.bio_short = bio_short;
			this.links = links;
			this.email = email;
			this.languages = languages;
	}
	get avatar() {
		return "/avatars/" + this.first_name.toLowerCase() + "-" + this.id + ".jpg";
	}
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

//9
var projects = [
    new Project(1,'CS Website',
        'Not only will this new website show off each of our projects, tasks and quick links to all of our resources and tools the club is using, but it will also become a hub for our new and current members to digest a project and become a great help! Any new top news, upcoming event, and project updates will be posted to our site for everyone to view. My vision in this website is for everyone, members, programmers, and ppotentialotental members to stay informed about progress and details in every project. Members and potential members can comment and give feedback to any project as a comment feed in each project. Each project contains a detailed description about goals, requirements, and the platform as well as images, list of participating members, and a timeline of events and achievements. As for members, a club member can create a profile and fill in a picture, short and long bios, and show off any work done outside of the club. Quick links will show all of the projects, listed on the website, each member has participated in. As for the About and Contact Us pages, everyone will have the opportunity to ask how to join the club and learn about what we do.',
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
        'GitHub issues are great for saving todos and progress needed to be made that is related to code. But, what about general tasks that do not relate to any repository on GitHub? Well, that\'s where our app comes in. We\'re adding as many features as we can from GitHub into a single app that also contains a shared task manager.',
        'A central hub for the club to use to view and edit GitHub issues, comments and pull requests as well as a task manager replica of Trello.',
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
        '',
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
        'Created with <a href="https://unity3d.com" target="_blank">Unity 3D</a>, Retailer is an all-out, in-depth simulation of a store manager. You, the store manager, will control and oversee many things such as who you hire, promote and transfer in your store. Chose which vendors you\'d like to partner with as well as what merchandise you\'ll want to sell. Will your store be a grocery store, hardware store or an outlet? Every small detail will be made by you, the store manager.',
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
        '',
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
        "<a href=/members/3'>I</a> worked on a landmine detection quadcopter with college <a href='/members/9'>Yekalo Aberha</a>. Mr. Aberha and I, coded and build a lidar two dimensional mapping sensor. To create a graph of points to represent what the sensor is receiving which was edges of objects.<br /><br />x = r × cos( θ )y = r × sin( θ )<br /><br />We found out that the sensor was not working because we needed to convert the rotation of the sensor, into (x,y) coordinates.",
        '',
        'Archived',
        '',
        {},
        {},
        []
    ),
    new Project(2,'2D Platformer',
        '',
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

//28
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
	new Member(28, 'Andrew', 'Eljumaily',
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
	new ProjectsMembers( 33 , 1 , 16 , 'Programmer' ),
	new ProjectsMembers( 34 , 1 , 19 , 'Programmer' ),
	new ProjectsMembers( 27 , 1 , 11 , 'Programmer' ),
	new ProjectsMembers( 22 , 1 , 5 , 'Programmer' ),
	new ProjectsMembers( 12 , 1 , 8 , 'Programmer' ),
	new ProjectsMembers( 26 , 1 , 13 , 'Programmer' ),
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
	new ProjectsMembers( 52 , 10 , 2 , 'Developer')
];
//53
//0-ben 1-joshua 2-erick 3-oran 4-steven 5-alex chen chen 6-noah 7-conan 8-wind
//9-yekalo 10-alex dewey 11-junior 12-kyle 13-eli 14-austin 15-isaiah 16-noah
//17-spencer 18-travis 19-erik 20-adam 21-ashley 22-duncan 23-andrew 24-greg
//25-juan 26-alex frenandez 27-jameson
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
        ":5", 3,
        [
            {title: "Unity", experience: 4}
        ],
        2
    ),
    new ProjectAreaRequests( 4, 6,"Graphic/Asset Designers",
        "",
        ":3", 2,
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
    ),
//Club App
    new ProjectAreaRequests( 12, 9,"Back-End Developer",
        "Be familiar with public APIs such as GitHub's and server-side rendering.",
        ":2", 1,
        [
			{title: "GitHub API", experience: 3}
		],
        2
    ),
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
	new Event( 3, 'Ludum Dare',
		'Themes are suggested and chosen by the community. Theme Suggestions are accepted starting 5 weeks before the event. Theme Voting kicks off 2 weeks before the event. Ludum Dare games are submitted to 1 of 2 categories: the Jam or the Compo.</p><h3>The Jam</h2><p>The Jam is the Ludum Dare event for everyone. Teams, individuals, anyone that wants to come out and make something.<ol><li><p>Work alone or in a team.</p></li><li><p>Create a game in 72 hours.</p></li></ol><p>You’re free to use any tools or libraries to create your game. You’re free to start with any base-code you may have. You’re free to use 3rd party Artwork/Music/Audio assets, or assets you previously created, but we ask that you OPT-OUT of the respected voting categories (Graphics, Audio). You can opt-out of a voting category when you submit your game. We strongly recommend you only use assets that you have the legal right to use (Public Domain, things you licensed/created, etc). If you don’t have the right to use something, it is your responsibility.</p><h3>The Compo</h3><p>The Compo is Classic Ludum Dare. Another way to think of it is as Ludum Dare “Hard Mode”. Compo games are created entirely from scratch (**) by one person, in just 48 hours. This is the ultimate test of your game creation skills.<ol><li><p>You must work alone (solo).</p></li><li><p>Your game, all your content (i.e. Art, Music, Sound, etc) must be created in 48 hours.</p></li><li><p>Source code must be included.</p></li></ol><p>You’re free to use any tools or libraries to create your game. You’re free to start with any base-code you may have. At the end, you will be required to share your source code.<br><br>TIP: Compo games are typically reviewed harsher than Jam games. If your game closely resembles a sample game that comes with a development tool, it probably wont get a good score. Be sure to fully customize, and make the game your own.</p>',
		'Ludum Dare is an event where you create a game from scratch in a weekend based on a theme.',
		'On-Line Event',
		'April 21, 2017',
		[
			{caption: 'Event', image: 'ludm-dare-1.jpg', url: 'http://ludumdare.com/compo/'}
		]
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

//
var _categories = [
    new Category( 0, 'Web Development',
        'description',
        "/images/icons/tutorial-web.png",
        [
            new Tutorial( 0, 'Nodejs Boilerplate',
                'Nodejs is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js\' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.',
                'Get an introduction on how to create your own Nodejs project using Express and other tools used on the Club Website!',
                1, 0, 0, 0,
                [
                    new Lesson( 0, "Getting started with Nodejs and using npm",
                        "In this lesson we'll download the tools used in a project flow like Nodejs and you'll learn how to use npm in the cmd/Terminal to install and manage a project's dependencies such as Express, Pug, Bootstrap, and <a href=https://www.npmjs.com/>more</a>.\
                        ",
                        "This is an installation guide to getting the proper tools needed to create, code, and test a Nodejs project",
                        [
                            {text: "Welcome to this Nodejs tutorial! Here you will understand the project workflow and learn how to add new pages to the Club Website. Listed below are a few things you'll need:"},
                            {list: { value: [
                                {markdown: "Node, install [here](https://nodejs.org/en/),"},
                                {markdown: "On a PC, you'll need access [cmd](https://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/cmd.mspx?mfr=true)"},
                                {markdown: "On a Mac, you'll need to access [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS) )"}
                                ]}},
                            {text: "When you install Nodejs, npm, or node package manager, will be installed. Nodejs will be our runtime server we'll use to compile our project. But first, let's create a package.json file."},
                            {section: "Working with npm"},
                            {list: {text: {markdown: "A package.json file holds information about our workflow such as its name, version, dependencies or packages, scripts you can run in cmd/Terminal, and [more](https://docs.npmjs.com/files/package.json).\
                                Open up cmd, or terminal, and type in the following (you might want to change directory into someplace like your Desktop):"},
                            value: [
                                {markdown: "`$ mkdir myworkspace`, creates a new directory"},
                                {markdown: "`$ cd myworkspace`, changes directory to myworkspace"},
                                {markdown: "`$ npm init`, initializes a new package.json file"},
                                {markdown: "Follow the steps shown in the cmd/Terminal window by entering the name, version number, description, entry point, test command, git repo url, keywords, author, and license.\
                                    Whatever is in `()` is the default if you enter a blank option. You can also use `$ npm init -y` to skip these steps and use the default values."},
                                "After you've created the package.json file, open up the myworkspace folder and you'll see this file with all its options",
                            ]}},
                            {list: {text: "Remember, this package.json file will show what are our saved dependencies and scripts are for this workspace.\
                                So, lets add some dependencies in our workspace:",
                            value: [
                                {markdown: "`$ npm install bootstrap --save`.\
                                    This will do two things: download the package bootstrap into a node_modules folder and since we've put a `--save` flag, this package will be saved in our package.json file"},
                                {markdown: "`$ npm install mongodb`. This will only install the package but not save in our package.json file"}
                            ]}},
                            {markdown: "Open up our **package.json** file and look under dependencies.\
                                You'll see `\"bootstrap\": \"^3.3.7\"` (version will vary). We'll explain the `^3.3.7` later.\
                                But for now, if you uploaded this project to GitHub and had collaborators clone your project, they can download all of the project's dependencies by running `$ npm install`."},
                            {list: {text: "To test this, go to the myapp folder and delete the node_modules folder and run the following in the same cd/Terminal window:",
                            value: [
                                {markdown: "`$ npm install`, this will look at our **package.json** file and install each package listed under `\"dependencies\"`.\
                                    As for the `^3.3.7`, this means install the most stable version from 3.3.7 and newer; more [here](https://docs.npmjs.com/files/package.json#dependencies)"}
                            ]}},
                            {text: "With this simple command everyone can jump into any project node project and start testing right away!"},
                            {section: "Helpful Resources"},
                            {list: {text: "",
                            value: [
                                {markdown: "Here are the docs for [Nodejs](https://nodejs.org/en/docs/) to best understand this project workflow"},
                                {markdown: "Here's a YouTube Playlist from npm Inc on getting started with npm [here](https://www.youtube.com/watch?v=pa4dc480Apo&list=PLQso55XhxkgBMeiYmFEHzz1axDUBjTLC6)"},
                                {markdown: "Debug your node package manager problems with this [YouTube Channel](https://www.youtube.com/channel/UCK71Wk0I45SLTSXQA23GdIw), or check out the docs from npm [here](https://docs.npmjs.com/)"}
                            ]}}
                        ],
                        true
                    ),
                    new Lesson( 1, "The Express Package",
                        "In this lesson, we'll understand the workflow that is made with Express. This workspace is used in the Club Website.",
                        "Setting up an Express boilerplate project",
                        [
                            {list: {text: "What is Express? Express is a nodejs server project which handles routing. Some of its features are:",
                            value: [
                                "Robust routing",
                                "Focus on high performance",
                                "Super-high test coverage",
                                "HTTP helpers (redirection, caching, etc)",
                                "View system supporting 14+ template engines",
                                "Content negotiation",
                                "Executable for generating applications quickly"
                            ]}},
                            {section: "npm express-generator"},
                            {list: {text: "Express is also a node module, but we're going to use the express-generator to start the boilerplate workflow.\
                                Now, open cmd/Terminal, cd onto your desktop and run the following:",
                                value: [
                                {markdown: "`$ npm install express-generator -g`, the `-g` flag will install this in a global location versus the node_module folder inside the project, so you might have to use `sudo` in front of this command if it fails due to authentication"},
                                {markdown: "`$ express --view=pug myapp`, the `--view=pug` flag will tell express to use [pug](https://pugjs.org/api/getting-started.html) as the view engine and myapp is the title of this project"},
                                {markdown: "`$ cd myapp`, change directory into our new folder"},
                                {markdown: "`$ npm install`, download all the dependencies"},
                                {markdown: "`$ npm start`, this is the script we'll use to start our express server"},
                                {markdown: "Now, open up [http://localhost:3000/](http://localhost:3000/)"}
                            ]}},
                            {image: {text: {markdown:
                                "If you're at this step, success! You've managed npm, kinda, and used a package, kinda, to start on our boilerplate... kinda.\
                                This will be your work environment: first open the project folder, or root folder, in a text editor like Visual Studio Code, Atom or Sublime Text.\
                                Next, open cmd/Terminal and `cd` into the root folder\
                                Then, enter `npm start` and open any web browser and visit [http://localhost:3000/](http://localhost:3000/)"},
                                caption: "Open http://localhost:3000/ inside Google Chrome", link: "nodejs-express-1.png"}},
                            {section: "Helpful Resources"},
                            {list: {text: "",
                            value: [
                                {markdown: "[Understanding the view engine Pug](https://pugjs.org/language/attributes.html) look under **Language Reference** for more"},
                                {markdown: "Check out this [video](https://www.youtube.com/watch?v=l5AXcXAP4r8) about the JADE/PUG engine",
                                subtitle: {markdown: "*Note* instead of using express to render each jade/pug file, this video uses jade in the cmd/terminal to render the page in Google Chrome where we use `npm start` to test our pages."}},
                                {markdown: "[**Migrating from JADE to PUG**](https://pugjs.org/api/migration-v2.html) this will give you steps from upgrading to pug from jade"}
                            ]}},
                            {text: "Sadly, we're not done here. There are a few more tools/packages the current Club Website uses that we'd like to add to this boilerplate project."}
                        ],
                        true
                    ),
                    new Lesson( 2, "Adding SASS to the project",
                        "Learn how to add SASS to your workspace and start using partials to scope styling to certain pages.",
                        "Love HTML/CSS? In that case, you'll love SCSS!",
                        [
                            {text: "Let's continue from our project we created using **express generator** boilerplate."},
                            {list: {text: "Open up cmd/terminal and run the following:",
                            value: [
                                {markdown: "`$ npm install node-sass-middleware@0.8.0 --save`"},
                                {code: {text: {markdown: "Open **app.js** in a text editor and paste the following after `line 22`:"},
                                value: [
                                    "app.use('/stylesheets',require('node-sass-middleware')({",
                                    "&nbsp; src: path.join(__dirname, 'sass'),",
                                    "&nbsp; dest: path.join(__dirname, 'public/stylesheets'),",
                                    "&nbsp; debug: true,",
                                    "&nbsp; outputStyle: 'compressed',",
                                    "&nbsp; sourceMap: true",
                                    "}));"
                                ]}, footer: {markdown: "Be sure to paste this code before this line of code: `app.use(express.static(path.join(__dirname, 'public')));`"}},
                                {markdown: "Create a new folder, name it **sass** in the root folder of our project"},
                                {markdown: "Create a new file, name it **main.scss** inside the **sass** folder"},
                                {markdown: "Cut and paste the contents in **style.css**, found under **root > public > stylesheets**, into **main.scss**"},
                                {code: {text: {markdown: "Open **layout.pug** in the **views/** folder and paste the following on `line 5`:"},
                                value: [
                                    "link(href='/stylesheets/main.css', rel='stylesheet')"
                                ]}, subtitle: {markdown: "You can now delete the **style.css** file in the **public/stylesheets/** folder"}},
                                {markdown: "End any process in your cmd/Terminal window and run `$ npm start` and open [localhost:3000](localhost:3000). Yes, nothing has changed, but now we have sass installed!"}
                            ]}},
                            {list: {text: "Here are a few things you now do with sass:",
                            value: [
                                "Variables",
                                "Nesting",
                                "Partials",
                                "Import",
                                "Mixins",
                                {markdown: "Here's a guide on more [features](http://sass-lang.com/guide)"}
                            ]}},
                            {text: "There are a few features we would recommend using in this boilerplate project."},
                            {section: "Partials"},
                            {list: {text: {markdown: "Now, understand why the first sass file we've created was titled **main.scss** because this file will hold the top most styles used throughout the site.\
                            But, this will also import other scss files in the form of a partial. Used in the Website, a each partial represents each page (e.g. _index.scss, _members.scss, _projects.scss):"},
                            value: [
                                {markdown: "First, create a **partials** folder in the **sass** folder"},
                                {markdown: "Create a new file **_index.scss** inside the **partials**folder"},
                                {markdown: "Paste the following:", footer: {code: {
                                value: [
                                    "#index-page {",
                                    "",
                                    "}"
                                ]}}},
                                {markdown: "Import our new sass file by adding `@import 'partials/index'` at the bottom of **main.scss**"},
                                {code: {text: {markdown: "In the **index.pug** file, paste the following:"},
                                value: [
                                "block content",
                                "&nbsp; #index-page",
                                "&nbsp;&nbsp; h1= title",
                                "&nbsp;&nbsp; p Welcome to #{title}",
                                ]}}
                            ]}},
                            {markdown: "The index page now lies inside a `div` tag which has the id of *index-page*.\
                            So, our **_index.scss** only gets applied to div tags with the unique id of **index-page**. Thus, separating specific styling to only certain pages or elements is done by adding ids.\
                            Other styling such as classes also applies :)"},
                            {section: "Helpful Resources"},
                            {list: {text: "",
                            value: [
                                {markdown: "Check out the SASS docs [here](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)"},
                                {markdown: "Here's a in-depth video on [SASS](https://www.youtube.com/watch?v=wz3kElLbEHE)",
                                footer: "Beware, this video is 45m long!"}
                            ]}}
                        ],
                        true
                    ),
                    new Lesson( 3, "nodemon and Google's Extension, LiveReload",
                        "This lesson will require that you use Google Chrome as the browser as LiveReload is only available on this browser. But, don't flip! nodemon is not dependent on the browser so this lesson is still a great time saver when working with nodejs projects!",
                        "Hate restarting your server every time you make a simple change in your source code? Well, you'll love this lesson",
                        [
                            {markdown: "Nodemon is another npm package, like Express, but this one restarts the node server based on changes made in the root folder.\
                            Whenever you run `npm start`, a new server is created and your website is created under localhost:3000. But, whenever you make a change in your source code, you'll have to close this server by hitting **Ctr^C** in the cmd/Terminal window and then running `npm start` each time. With nodemon, it'll do that for you!\
                            But that's not all."},
                            {list: {text: {markdown: "We'll also install LiveReload, a Chrome extension that refreshes the internet page whenever a change is made.\
                            Open up the **myapp** folder in cmd/Terminal window and run the following (if you do **not want to use Google Chrome** for your browser, skip steps 2, 3, and 5:"},
                            value: [
                                {markdown: "`$ npm install nodemon --save-dev`, the `--save-dev` flag tells npm that this dependency is used for development only and not needed when the product is in production, or shipped.\
                                Look here for [more](https://docs.npmjs.com/files/package.json#devdependencies)"},
                                {markdown: "`$ npm install livereload --save-dev`"},
                                {code: {text: {markdown: "Open the root folder, **myapp**, in a text editor and open **app.js** and paste the following after `line 15`:"},
                                value: [
                                "try //try to load LiveReload",
                                "{",
                                "&nbsp; var livereload = require('livereload');",
                                "&nbsp; server = livereload.createServer({exts: ['pug','js','sccs,'css']});",
                                "&nbsp; server.watch([__dirname + '/public', __dirname + '/scss', __dirname + '/views', __dirname + '/routes']);",
                                "&nbsp; console.log(\"LiveReload Started\");",
                                "}",
                                "catch (ex) {}"
                                ]}},
                                {code: {text: {markdown: "In **package.json**, look for \"scripts\" and paste the following:"},
                                value: [
                                    "\"scripts\": {",
                                    "&nbsp; \"start\": \"node ./bin/www\"",
                                    "&nbsp; \"dev\": \"nodemon --debug ./bin/www\"",
                                    "}",
                                ]}},
                                {markdown: "Before you open localhost:3000, you'll need to install the Chrome Extension [here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)"},
                                {markdown: "Back in cmd/Terminal, close any process and run `$ npm run dev`. Hopefully there were no errors on your console"},
                                {markdown: "Now, open [localhost:3000](localhost:3000) and enable the extension from the toolbar of the Chrome browser and make some changes in the **index.pug** file then hit save.\
                                Without restarting the server and hitting refresh on your browser, the new changes appear!"}
                            ]}}
                        ],
                        true
                    ),
                    new Lesson( 4, "Bootstrap & Jquery",
                        "",
                        "Love bootstrap!? Lets get started then!",
                        [
                            {text: "Lesson to be updated soon."}
                        ],
                        false
                    ),
                    new Lesson( 6, "Other Stacks, Technologies and Resources",
                        "",
                        "Here are other packages used in the Website that can be of-use in your workspace",
                        [
                            {section: "Video Tutorials"},
                            {list: {text: "",
                            value: [
                                {markdown: "[Nodejs Tutorial](https://www.youtube.com/playlist?list=PLGLfVvz_LVvSpxyVx5XcprEgvhJ1BzruD) from [Derek Banas](https://www.youtube.com/user/derekbanas)"}
                            ]}}
                        ],
                        true
                    )
                ],
                true
            ),
            new Tutorial( 1, "Adding a New Page",
                "This one's a large one, butt! we'll be sure to not miss any details without explanation. We're going to add a partner's page to our website. Let's get started.",
                "By following this tutorial you'll understand 90% of this project workflow!",
                2, 0, 0, 0,
                [
                    new Lesson( 0, "Create the html page",
                        "",
                        "",
                        [
                            {text: ""},
                            {section: ""},
                            {list: {text: ""},
                            value: [
                                {markdown: "**DUPLICATE** the **index.pug** file and name it **partners.pug**"},
                                {markdown: "Open up **partners.pug** and paste the following",
                                footer: {code: {value: [
                                    ""
                                ]}}}
                            ], footer: "Here is where we'll add all of our styled html components in this file."}
                        ]
                    )
                ],
                false
            ),
            new Tutorial( 2, "MongoDB",
                "",
                "",
                3, 0, 0, 0,
                [
                ],
                false
            )
        ],
        true
    ),
    new Category( 2, "Hardware and Software",
        "description",
        "/images/icons/tutorial-c.png",
        [],
        true
    ),
    new Category( 3, "Mobile Development",
        "description",
        "/images/icons/tutorial-mobile.png",
        [],
        true
    ),
    new Category( 4, "iOS Development",
        "description",
        "/images/icons/tutorial-ios.png",
        [
            new Tutorial( 0, "Getting started with iOS development",
                "",
                "",
                1, 0, 0, 0,
                [
                    new Lesson( 4, "Quick Start",
                        "",
                        "Here are some VERY informational videos on Swift and app development with Swift. This includes a link to Stanford's course.",
                        [
                            {text: "What's shown here are in-depth videos on getting a great foundation on Swift and developing apps in Xcode"},
                            {video: {text: {list: {text: "Stanford's 1st lecture demonstrating ", 
                                value: [{text: "class/struct/enum declarations"}, {markdown: "optionals, switches, and `if let` syntax"}, {text: "understanding the *interface builder* with IBActions and IBOutlets"}]}},
                                url: "https://www.youtube.com/embed/ilQ-tq772VI?list=PLPA-ayBrweUz32NSgNZdl0_QISw-f12Ai", caption: "Stanford 2017"}
                            },
                            {markdown: "Here's a Slack post describing most of the [Stanford's videos](https://slack-files.com/T0LTMGRNW-F5P51708N-06579b1dbb)"},
                            {video: {text: {list: {text: "\"..a ton of examples..\" he says and that is what you'll get. You'll use Swift Playgrounds to execute the code"}, value: []}, 
                                url: "https://www.youtube.com/embed/dKaojOZ-az8", caption: "Swift 3 Tutorial-Derek Banas"}
                            },
                            {list: {text: "Start Developing iOS Apps (Swift) is the perfect starting point for learning to create apps that run on iPhone and iPad. View this set of incremental lessons as a guided introduction to building your first app—including the tools, major concepts, and best practices that will ease your path.",
                                value: [
                                {markdown: "Build a Basic UI, link [here](https://developer.apple.com/library/content/referencelibrary/GettingStarted/DevelopiOSAppsSwift/BuildABasicUI.html#//apple_ref/doc/uid/TP40015214-CH5-SW1)"},
                                {markdown: "Create a Table View, link [here](https://developer.apple.com/library/content/referencelibrary/GettingStarted/DevelopiOSAppsSwift/CreateATableView.html#//apple_ref/doc/uid/TP40015214-CH8-SW1)"}
                                ]
                            }},
                            {section: "Other Resources"},
                            {list: {
                                value: [
                                {markdown: "Swift Programming PDF: iBooks [link](https://itunes.apple.com/us/book/the-swift-programming-language-swift-3-1/id881256329?mt=11)"},
                                {markdown: "Intro to App Development with Swift PDF: iBooks [link](https://itunes.apple.com/us/book/intro-to-app-development-with-swift/id1118575552?mt=11)"},
                                {markdown: "App Development with Swift PDF: iBooks [link](https://itunes.apple.com/us/book/app-development-with-swift/id1219117996?mt=11)"}
                            ]}}
                        ],
                        true
                    ),
                    new Lesson( 5, "Installing and Understanding Xcode",
                        "",
                        "Xcode will be your one-time stop for all of your development. It'll be your IDE, debugger and deployment application",
                        [
                            {section: "Setting up the Xcode project"},
                            {text: ""}
                        ],
                        false
                    ),
                    new Lesson( 0, "Exercise: Basketball Ratio",
                        "",
                        "With a label and two buttons, you can calculate the ratio of your hit/miss.",
                        [
                            {section: "Setting up and understanding the Xcode project"},
                            {video: {text: {markdown: "In this video, we'll set up a new project using the **Single View Application** template and understand what files will make up our project.\
                                We'll also use the Interface Builder to create our user interface, or UI, by dragging and dropping buttons and labels to then wire up to our controller.\
                                Lastly, the controller will calculate the ratio and update the view."}, url: "//www.youtube.com/embed/TQl_Sv3LztQ", caption: "Xcode Setup"}},
                            {list: {text: "Shown below are the steps explained in the video:", value: [
                                {markdown: "**File > New > Project** and select **Single View Application** under *iOS*"},
                                {markdown: "Name our new project **Basketball Ratio** and enter **com.mycompany** under *Organization Identifier*. Be sure the language is set to **Swift**. Uncheck **Use Core Data** and all of the following check boxes and hit Next to select the destination",
                                    footer: {images: [
                                        {link: "new-project-basketball-1.png", caption: "a new project"},
                                        {link: "workspace-basketball-1.png", caption: "Xcode window"}
                                    ], footer: "On the left are our files"}
                                },
                                {markdown: "**Main.storyboard**: this is the UI of our application. Here, we'll add our components such as buttons and labels"},
                                {markdown: "**ViewController.swift**: here we'll handle button click events from our storyboard and updating the view based off of a few properties saved in the controller"},
                                {markdown: "**AppDelegate.swift**: this class is different. When an event from the application state is fired, the AppDelegate will handle each event",
                                    footer: {list: {value:[
                                        {markdown: "`func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {}` when the application `didFinishLaunchingWithOptions:` this method is called"},
                                        {markdown: "`func applicationDidEnterBackground(_ application: UIApplication) {}` when the application `applicationDidEnterBackground:` this method is called say if the user clicks the home button"},
                                        {markdown: "`func applicationWillEnterForeground(_ application: UIApplication)` when the application `applicationWillEnterForeground:` this method is called when the application WILL become active again from the background"},
                                        {markdown: "check out the AppDelegate’s [reference library](https://developer.apple.com/reference/uikit/uiapplicationdelegate) for more events, or protocol prototypes"}
                                    ]}}}
                            ]}},
                            {section: "Interface Builder"},
                            {video: {text: {markdown: "In this video, "}, url: "//www.youtube.com/embed/TQl_Sv3LztQ", caption: "Xcode's Interface Builder"}},
                            {text: "Select **Main.storyboard** on the left navigation bar to open up the interface builder."},
                            {list: {value: [
                                    {textImage: {text: {markdown: "**Adding Components** at the bottom right select *Object Library* and look for **UIButton** and **UILabel**.\
                                        If you do not see this, press `cmd+option+0` to show the *Utilities* panel."},
                                        image: {link: "object-library-show-1.png"}}
                                    },
                                    {textImage: {text: {markdown: "Drag and drop two buttons and a label into our view. Double click each button and name them *Hit* and *Miss*.\
                                        We'll leave the label as is. Style each component as needed."},
                                        image: {link: "basketball-ratio-layout-1.png"}}
                                    },
                                    {markdown: "**Making Connections** There are a two kinds of connections we can make from a interface to a controller: *Outlets* and *Actions*.\
                                            An outlet to a controller allows the controller to update the connected component such as setting the button title or the text of a label.\
                                            Actions are functions, or methods, in a controller fired by the connector, like a button, for defined events."},
                                    {textImage: {text: {markdown: "**Connecting to the Controller** by opening the *Assistance Editor* located at the top right of the window, we can see the interface builder and its controller on the right.\
                                        First we'll do the buttons:"},
                                        image: {link: "assistance-editor-show-1.png"}}
                                    },
                                    {markdown: "select the *Hit* button from the interface builder and **cmd+right-click and drag** from the button to the controller after `line 12` and release the mouse.\
                                        A connection window pops up (look at the second screenshot below). Set the `Connection` from `Outlet` to `Action` with `Name` set to `pressHit`.\
                                        The `Event` is the how this *action* is fired. The most common for a button is `Touch Up Inside`. Do this for the *Miss* button but be sure to name the `Name` as `pressMiss`.\
                                        Now the label:"},
                                    {markdown: "The same applies, **cmd+right-click drag** from the interface builder to the controller. But, instead of the Connection as `Action` ",
                                        footer: {images: [
                                            {link: "basketball-ratio-ui-controller-connection-1.png", caption: "Connect with Right-click drag"},
                                            {link: "basketball-ratio-ui-controller-action-1.png", caption: "IBAction settings"},
                                            {link: "basketball-ratio-ui-controller-connection-2.png", caption: "Our new ViewController.swift"}
                                        ]}
                                    }
                            ]}},
                            {section: "Using the ViewController to update the view"},
                            {video: {text: {markdown: "In this video, "}, url: "//www.youtube.com/embed/TQl_Sv3LztQ", caption: "Xcode's Interface Builder"}},
                            {list: {value: []}}
                        ],
                        false
                    ),
                    new Lesson( 1, "Exercise: Unit Conversions",
                        "",
                        "Using Apple's UIKit and delegation, we'll build a simple input-output converter",
                        [
                            {section: "Setting up the Xcode project"},
                            {text: ""}
                        ],
                        false
                    ),
                    new Lesson( 2, "Exercise: Calculator",
                        "",
                        "Learn the fundamentals of Model View Controller, or MVC, to build a calculator",
                        [
                            {section: "Setting up the Xcode project"},
                            {text: ""}
                        ],
                        false
                    ),
                    new Lesson( 3, "Exercise: Utilities",
                        "",
                        "After learning MVC, let's build an application that has multiple MVCs",
                        [
                            {section: "Setting up the Xcode project"},
                            {text: ""}
                        ],
                        false
                    )
                ],
                true
            )
        ],
        true
    ),
    new Category( 5, "Game Development",
        "description",
        "/images/icons/tutorial-game.png",
        [
            new Tutorial( 0, "Getting started with Game Development",
                "",
                "",
                1, 0, 0, 0,
                [
                    new Lesson( 1, "Jumping Right into Unity",
                        "",
                        "",
                        [
                            {section: "YouTube Tutorials"},
                            {list: {text: "These tutorials are from Unity themselves and are great introductions to Unity and becoming exposed to C#",
                            value: [
                                {markdown: '[Beginner 2D UFO Tutorial](https://www.youtube.com/playlist?list=PLX2vGYjWbI0RZ3M5zSs-cegtIzv-FBi4q)'},
                                {markdown: '[Tutorials - Beginner 2D](https://www.youtube.com/playlist?list=PLX2vGYjWbI0SFVUTzpOkmr8f9QZI3N8eY)'},
                                {markdown: '[2D Platformer Character Controller](https://www.youtube.com/playlist?list=PLX2vGYjWbI0SUWwVPCERK88Qw8hpjEGd8)'},
                            ]}
                            }
                        ],
                        true
                    )
                ],
                true
            )
        ],
        true
    )
];

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
    categories: _categories,
    services,
    club_officers
};

