var csApp = angular.module( 'csApp', [] );



csApp.controller( 'ProjectListController', function ProjectListController( $scope )
{
	$scope.projects = projects;
} );

csApp.controller( 'ProjectPageController', function ProjectListController( $scope )
{
	$scope.project = projects[ 0 ];
	$scope.services = services;
} );
