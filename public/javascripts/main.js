var csApp = angular.module( 'csApp', [] );

csApp.controller( 'ProjectListController', function ProjectListController( $scope )
{
	$scope.projects = [
	{
		name: 'Micromouse',
		description: ' is the best project!'
	},
	{
		name: 'Function Fighters',
		description: ' is the best project!'
	},
	{
		name: 'CS Website',
		description: ' is the best project!'
	} ]
});
