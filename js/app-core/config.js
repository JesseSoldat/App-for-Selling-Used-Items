let config = function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	//APP CORE-----------------------
		.state('dash', {
			url: '/',
			controller: 'DashCtrl',
			templateUrl: 'templates/app-core/dash.html',
		})
		.state('editDash', {
			url: '/editdash',
			templateUrl: 'templates/app-core/edit-dash.html'
		})
		.state('login', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'templates/app-core/login.html',
		})
		.state('register', {
			url: '/register',
			controller: 'LoginCtrl',
			templateUrl: 'templates/app-core/register.html'
		})
		.state('profile', {
			url: '/profile',
			controller: 'ProfileCtrl',
			templateUrl: 'templates/app-profile/profile.html'
		})

		;

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;