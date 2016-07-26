var csApp = angular.module( 'csApp', [] );

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
  members: ['Benjamin Hough','Joshua Murphy','Erick Sanchez','Seaney Shell','Oran Collins']
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
	$scope.project = projects[0];
  $scope.services = services;
} );
