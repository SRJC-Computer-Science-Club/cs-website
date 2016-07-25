var csApp = angular.module( 'csApp', [] );

var projects = [
{
  title: 'Micromouse',
  description: ' is the best project!',
  links:
  {
    GitHub: 'https://github.com/SRJC-Computer-Science-Club/micromouse',
    waffleIO: 'https://waffle.io/SRJC-Computer-Science-Club/micromouse'
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




csApp.controller( 'ProjectListController', function ProjectListController( $scope )
{
	$scope.projects = projects;
} );

csApp.controller( 'ProjectPageController', function ProjectListController( $scope )
{
	$scope.project = projects[0];
} );
