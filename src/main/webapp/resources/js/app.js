var app = angular.module("BGAdminApp", [ 'ngResource', 'ui.router' ]);

app.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('todo', {
		url : '/',
		templateUrl : 'resources/views/index.jsp',
		controller: 'TodoCtrl'
	}).state('list', {
		url : '/list',
		templateUrl : 'resources/views/list.jsp',
		controller: 'TodoCtrl'
	});

} ]);