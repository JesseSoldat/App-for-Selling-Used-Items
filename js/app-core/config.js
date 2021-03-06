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
			controller: 'DashCtrl',
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
		.state('editProfile', {
			url: '/profile/edit',
			controller: 'EditProfileCtrl',
			templateUrl: 'templates/app-profile/edit-profile.html'
		})
		.state('photos', {
			url: '/photos',
			controller: 'PhotosCtrl',
			templateUrl: 'templates/app-profile/photos.html'
		})
		.state('photo', {
			url: '/photo',
			controller: 'PhotoCtrl',
			templateUrl: 'templates/app-profile/photo.html',
			params: {myParam: null}
		})

		;

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;