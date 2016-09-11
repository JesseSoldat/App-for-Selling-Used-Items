let EditProfileCtrl = function($scope, $state, ProfileService){
	let currentUser;
	let userObj;

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			userObj = user
			currentUser = ProfileService.getProfile(user);
		} else {
			$state.go('login');
		}
	});
	$scope.editProfileControls = true;

	$scope.goBack = function(state){
		$state.go(state);
	}

	$scope.addProfile = function(user){
		ProfileService.addProfile(user, userObj);
	}

	$scope.editProfile = function(user){
		ProfileService.editProfile(user);
		$state.go('profile');
	}

	$scope.logOut = function(){
		firebase.auth().signOut().then(function(){
			$state.go('login');
		}, function(error){
			console.log(error);
		});
	}

};
EditProfileCtrl.$inject = ['$scope', '$state', 'ProfileService'];
export default EditProfileCtrl;