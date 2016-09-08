let config = function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	//APP CORE-----------------------
		.state('root', {
			abstract: true,
			controller: 'LayoutCtrl',
			templateUrl: 'templates/app-core/layout.html'
		})
		.state('root.dash', {
			url: '/',
			controller: 'DashCtrl',
			templateUrl: 'templates/app-core/dash.html'
		})
		.state('root.login', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'templates/app-core/login.html'
		})
		.state('root.register', {
			url: '/register',
			controller: 'LoginCtrl',
			templateUrl: 'templates/app-core/register.html'
		})

		;

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;