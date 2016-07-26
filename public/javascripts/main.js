var csApp = angular.module( 'csApp', [] );


//This will act as temporary database placeholder
var members = [
	{
		firstName: 'Benjamin',
		lastName: 'Hough',
		email: 'benhuff322@gmail.com',
		programmingLanguages:['C++','JavaScript']
	},
	{
		firstName: 'Joshua',
		lastName: 'Murphy',
		email: '',
		programmingLanguages:['C++','JavaScript']
	},
	{
		firstName: 'Erick',
		lastName: 'Sanchez',
		email: '',
		programmingLanguages:['C++','JavaScript']
	},
	{
		firstName: 'First',
		lastName: 'Last',
		email: '',
		programmingLanguages:['C++','JavaScript']
	},
	{
		firstName: 'First',
		lastName: 'Last',
		email: '',
		programmingLanguages:['C++','JavaScript']
	},
];


var projects = [
{
	title: 'Micromouse',
	description: ' is the best project!',
	links:
	{
		checkvist: 'https://checkvist.com/checklists/542765',
		waffle: 'https://waffle.io/SRJC-Computer-Science-Club/micromouse',
		github: 'https://github.com/SRJC-Computer-Science-Club/micromouse'
	},
	status: 'in progress',
	members: [ members[0] , members[1], members[2], members[3] ]
},
{
	title: 'Function Fighters',
	description: ' is the best project!'
},
{
	title: 'CS Website',
	description: ' is the best project!'
} ];

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



csApp.controller( 'ProjectListController', function ProjectListController( $scope )
{
	$scope.projects = projects;
} );

csApp.controller( 'ProjectPageController', function ProjectListController( $scope )
{
	$scope.project = projects[ 0 ];
	$scope.services = services;
} );
